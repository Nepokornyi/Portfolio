'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Color, MathUtils, Points, ShaderMaterial } from 'three'
import { particlesFragmentShader, particlesVertexShader } from './shaders'
import {
    BUILT,
    getSecondsUntilLineMoves,
    getTimelineState,
    SWAY_ANGLE,
    SWAY_SPEED,
} from './timeline'
import { useHasBeenSeen } from './useHasBeenSeen'
import { HeadDots, useHeadDots } from './useHeadDots'
import { MousePosition, useMousePosition } from './useMousePosition'
import { usePrefersReducedMotion, useShouldAnimate } from '@/app/hooks/useShouldAnimate'

const DESKTOP_QUERY = '(min-width: 1024px)'
const DESKTOP_DOT_COUNT = 200_000
const MOBILE_DOT_COUNT = 80_000
const FIRST_VIEW_SHARE = 0.4

const CAMERA_FOV = 45 // vertical, degrees
const VIEW_WIDTH = 2.4
const VIEW_HEIGHT = 2.98

// How far back the camera must be so that the view box fits the canvas in width and in height
const getCameraDistance = (aspect: number) => {
    const halfHeightPerDistance = Math.tan(((CAMERA_FOV / 2) * Math.PI) / 180)
    return (
        Math.max(VIEW_HEIGHT / 2, VIEW_WIDTH / 2 / aspect) /
        halfHeightPerDistance
    )
}

const CURSOR_TILT_ANGLE = 0.09 // radians, ±5°
const CURSOR_SMOOTHING = 6
const SETTLED_ANGLE = 0.001

const getCursorOffset = (mouse: MousePosition, canvas: HTMLCanvasElement) => {
    const { left, top, width, height } = canvas.getBoundingClientRect()
    return {
        x: MathUtils.clamp(
            (mouse.x - (left + width / 2)) / (window.innerWidth / 2),
            -1,
            1,
        ),
        y: MathUtils.clamp(
            (top + height / 2 - mouse.y) / (window.innerHeight / 2),
            -1,
            1,
        ),
    }
}

// Colors come from the design tokens in globals.css
const readColorToken = (name: string) =>
    new Color(
        getComputedStyle(document.documentElement)
            .getPropertyValue(name)
            .trim(),
    )

type HeadPointsProps = {
    headDots: HeadDots
    hasBeenSeen: boolean
    shouldAnimate: boolean
    prefersReducedMotion: boolean
}

const HeadPoints = ({
    headDots,
    hasBeenSeen,
    shouldAnimate,
    prefersReducedMotion,
}: HeadPointsProps) => {
    const points = useRef<Points>(null)
    const material = useRef<ShaderMaterial>(null)
    const seconds = useRef(0)
    const hasStopped = useRef(true)
    const isWaitingForScan = useRef(false)
    const wakeTimer = useRef<number>(undefined)
    const mouse = useMousePosition()
    const invalidate = useThree((state) => state.invalidate)

    // The frameloop is 'demand': a frame draws only on request. useFrame requests the next one
    // while something moves. A state change, a cursor move or a scroll starts it again
    useEffect(() => {
        invalidate()
        if (!shouldAnimate || !hasBeenSeen) return
        const requestFrame = () => invalidate()
        window.addEventListener('pointermove', requestFrame, { passive: true })
        window.addEventListener('scroll', requestFrame, { passive: true })
        return () => {
            window.removeEventListener('pointermove', requestFrame)
            window.removeEventListener('scroll', requestFrame)
            window.clearTimeout(wakeTimer.current)
        }
    }, [invalidate, shouldAnimate, hasBeenSeen])

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uViewportHeight: { value: 0 },
            uSweep: { value: 0 },
            uIsPrint: { value: 1 },
            uViolet: { value: readColorToken('--color-secondary-discord') },
            uBlue: { value: readColorToken('--color-primary-blue') },
            uCyan: { value: readColorToken('--color-primary-green') },
        }),
        [],
    )

    useFrame((state, delta) => {
        if (!points.current || !material.current) return
        window.clearTimeout(wakeTimer.current)
        // After a stop, delta is the whole stop: count it as one frame, so that nothing jumps.
        const frameSeconds = hasStopped.current ? 1 / 60 : Math.min(delta, 0.1)
        if (hasBeenSeen) {
            seconds.current += isWaitingForScan.current ? delta : frameSeconds
        }
        hasStopped.current = true // until this frame requests the next one
        isWaitingForScan.current = false

        const { sweep, isPrint } = prefersReducedMotion
            ? BUILT
            : getTimelineState(seconds.current)
        const { uniforms } = material.current
        uniforms.uTime.value = seconds.current
        uniforms.uSweep.value = sweep
        uniforms.uIsPrint.value = isPrint ? 1 : 0
        uniforms.uViewportHeight.value = state.size.height * state.viewport.dpr
        state.camera.position.z = getCameraDistance(
            state.size.width / state.size.height,
        )

        const { rotation } = points.current
        let isTurning = true // the sway never stops
        if (mouse.current && !prefersReducedMotion) {
            const cursor = getCursorOffset(mouse.current, state.gl.domElement)
            const targetY = cursor.x * SWAY_ANGLE
            const targetX = -cursor.y * CURSOR_TILT_ANGLE
            rotation.y = MathUtils.damp(
                rotation.y,
                targetY,
                CURSOR_SMOOTHING,
                frameSeconds,
            )
            rotation.x = MathUtils.damp(
                rotation.x,
                targetX,
                CURSOR_SMOOTHING,
                frameSeconds,
            )
            isTurning =
                Math.abs(targetY - rotation.y) > SETTLED_ANGLE ||
                Math.abs(targetX - rotation.x) > SETTLED_ANGLE
        } else {
            rotation.y = Math.sin(seconds.current * SWAY_SPEED) * SWAY_ANGLE
        }

        if (!shouldAnimate || !hasBeenSeen) return
        const secondsUntilLineMoves = getSecondsUntilLineMoves(seconds.current)
        if (isTurning || secondsUntilLineMoves === 0) {
            hasStopped.current = false
            invalidate()
            return
        }

        isWaitingForScan.current = true
        wakeTimer.current = window.setTimeout(
            () => invalidate(),
            secondsUntilLineMoves * 1000,
        )
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[headDots.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-aBrightness"
                    args={[headDots.brightness, 1]}
                />
                <bufferAttribute
                    attach="attributes-aRandom"
                    args={[headDots.random, 1]}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={material}
                vertexShader={particlesVertexShader}
                fragmentShader={particlesFragmentShader}
                uniforms={uniforms}
                transparent
            />
        </points>
    )
}

export const ParticlesCanvas = () => {
    const canvas = useRef<HTMLCanvasElement>(null)
    const shouldAnimate = useShouldAnimate(canvas)
    const hasBeenSeen = useHasBeenSeen(canvas, FIRST_VIEW_SHARE)
    const prefersReducedMotion = usePrefersReducedMotion()
    const [dotCount] = useState(() =>
        window.matchMedia(DESKTOP_QUERY).matches
            ? DESKTOP_DOT_COUNT
            : MOBILE_DOT_COUNT,
    )
    const headDots = useHeadDots(dotCount)

    return (
        <Canvas
            ref={canvas}
            dpr={[1, 2]}
            camera={{ fov: CAMERA_FOV }}
            frameloop="demand"
        >
            {headDots && (
                <HeadPoints
                    headDots={headDots}
                    hasBeenSeen={hasBeenSeen}
                    shouldAnimate={shouldAnimate}
                    prefersReducedMotion={prefersReducedMotion}
                />
            )}
        </Canvas>
    )
}
