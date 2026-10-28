'use client'

import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    AdditiveBlending,
    Color,
    MathUtils,
    Points,
    ShaderMaterial,
    Vector2,
} from 'three'
import { useShouldAnimate } from '@/app/hooks/useShouldAnimate'
import { useMousePosition } from '@/components/Particles/useMousePosition'
import { cloudFragmentShader, cloudVertexShader } from './cloudShaders'

const DESKTOP_QUERY = '(min-width: 1024px)'
const DESKTOP_DOT_COUNT = 10_000
const MOBILE_DOT_COUNT = 4_500
const CLUSTER_COUNT = 7
const LOOSE_SHARE = 0.12
const CELL_SIZE = 8

const CAMERA_FOV = 40
const CAMERA_DISTANCE = 6
const SWAY_ANGLE = 0.2
const SWAY_SPEED = 0.15

const CURSOR_SMOOTHING = 8
const CURSOR_FADE = 6

const LANDSCAPE_SHIFT = 0.45

// A random number with a normal distribution: most values are near 0, few are beyond ±2
const gaussian = () =>
    Math.sqrt(-2 * Math.log(1 - Math.random())) *
    Math.cos(2 * Math.PI * Math.random())

const createCloud = (count: number) => {
    const clusters = Array.from({ length: CLUSTER_COUNT }, () => ({
        center: [gaussian() * 0.9, gaussian() * 0.5, gaussian() * 0.5],
        spread: 0.25 + Math.random() * 0.35,
    }))
    const positions = new Float32Array(count * 3)
    const brightness = new Float32Array(count)
    const random = Float32Array.from({ length: count }, Math.random)

    for (let dot = 0; dot < count; dot++) {
        if (Math.random() < LOOSE_SHARE) {
            positions.set(
                [gaussian() * 2.0, gaussian() * 1.2, gaussian() * 1.0],
                dot * 3,
            )
            brightness[dot] = Math.random() * 0.4
            continue
        }
        const { center, spread } = clusters[dot % CLUSTER_COUNT]
        const offset = [gaussian(), gaussian(), gaussian()].map(
            (value) => value * spread,
        )
        positions.set(
            center.map((value, axis) => value + offset[axis]),
            dot * 3,
        )
        // Dots near the middle of a clump are brighter
        const distanceShare = Math.hypot(...offset) / (spread * 2.5)
        brightness[dot] =
            MathUtils.clamp(1 - distanceShare, 0, 1) *
            (0.6 + 0.4 * Math.random())
    }
    return { positions, brightness, random }
}

const readColorToken = (name: string) =>
    new Color(
        getComputedStyle(document.documentElement)
            .getPropertyValue(name)
            .trim(),
    )

const CloudPoints = () => {
    const [cloud] = useState(() =>
        createCloud(
            window.matchMedia(DESKTOP_QUERY).matches
                ? DESKTOP_DOT_COUNT
                : MOBILE_DOT_COUNT,
        ),
    )
    const points = useRef<Points>(null)
    const material = useRef<ShaderMaterial>(null)
    const seconds = useRef(0)
    const mouse = useMousePosition()
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uResolution: { value: new Vector2() },
            uCellSize: { value: CELL_SIZE },
            uCursorPixel: { value: new Vector2() },
            uCursorStrength: { value: 0 },
            uTeal: { value: readColorToken('--color-primary-light-green') },
            uCyan: { value: readColorToken('--color-primary-green') },
            uDeepBlue: { value: readColorToken('--color-primary-dark-blue') },
            uBlue: { value: readColorToken('--color-primary-blue') },
        }),
        [],
    )

    useFrame((state, delta) => {
        if (!points.current || !material.current) return
        const { uniforms } = material.current
        const frameSeconds = Math.min(delta, 0.1)
        seconds.current += frameSeconds
        const time = seconds.current
        const { size, viewport } = state

        const halfHeight =
            CAMERA_DISTANCE * Math.tan(MathUtils.degToRad(CAMERA_FOV / 2))
        const halfWidth = halfHeight * (size.width / size.height)
        points.current.position.x =
            size.width > size.height ? halfWidth * LANDSCAPE_SHIFT : 0

        points.current.rotation.y = Math.sin(time * SWAY_SPEED) * SWAY_ANGLE

        // The cursor in device pixels from the bottom-left corner of the canvas
        const mousePosition = mouse.current
        const { left, top } = state.gl.domElement.getBoundingClientRect()
        const strength = uniforms.uCursorStrength.value
        if (mousePosition) {
            const x = mousePosition.x - left
            const y = mousePosition.y - top
            const isOverCanvas =
                x >= 0 && x <= size.width && y >= 0 && y <= size.height
            const cursorPixel = uniforms.uCursorPixel.value
            const targetX = x * viewport.dpr
            const targetY = (size.height - y) * viewport.dpr
            if (strength < 0.01) {
                cursorPixel.set(targetX, targetY)
            } else {
                cursorPixel.set(
                    MathUtils.damp(
                        cursorPixel.x,
                        targetX,
                        CURSOR_SMOOTHING,
                        frameSeconds,
                    ),
                    MathUtils.damp(
                        cursorPixel.y,
                        targetY,
                        CURSOR_SMOOTHING,
                        frameSeconds,
                    ),
                )
            }
            uniforms.uCursorStrength.value = MathUtils.damp(
                strength,
                isOverCanvas ? 1 : 0,
                CURSOR_FADE,
                frameSeconds,
            )
        }

        uniforms.uTime.value = time
        uniforms.uResolution.value.set(
            size.width * viewport.dpr,
            size.height * viewport.dpr,
        )
        uniforms.uCellSize.value = CELL_SIZE * viewport.dpr
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[cloud.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-aBrightness"
                    args={[cloud.brightness, 1]}
                />
                <bufferAttribute
                    attach="attributes-aRandom"
                    args={[cloud.random, 1]}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={material}
                vertexShader={cloudVertexShader}
                fragmentShader={cloudFragmentShader}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={AdditiveBlending}
            />
        </points>
    )
}

export const HeroCanvas = () => {
    const canvas = useRef<HTMLCanvasElement>(null)
    const shouldAnimate = useShouldAnimate(canvas)

    return (
        <div
            aria-hidden
            className="absolute inset-0 -z-10 pointer-events-none opacity-40 lg:opacity-100"
        >
            <Canvas
                ref={canvas}
                dpr={[1, 2]}
                camera={{ fov: CAMERA_FOV, position: [0, 0, CAMERA_DISTANCE] }}
                frameloop={shouldAnimate ? 'always' : 'demand'}
            >
                <CloudPoints />
            </Canvas>
        </div>
    )
}
