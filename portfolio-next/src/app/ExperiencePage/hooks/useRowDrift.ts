import { RefObject, useEffect, useRef } from 'react'
import {
    usePrefersReducedMotion,
    useShouldAnimate,
} from '@/app/hooks/useShouldAnimate'

const ROW_DURATIONS_MS = [11000, 9000, 13000, 10000, 12000, 9500, 14000]
const ROW_PHASE_STEP_MS = 1700

const MAX_PLAYBACK_RATE = 3
const RATE_PER_SCROLL_SPEED = 1
const BOOST_RISE_MS = 150
const BOOST_FALL_MS = 600

export const useRowDrift = (
    containerRef: RefObject<HTMLElement | null>,
    distance: number,
) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const shouldAnimate = useShouldAnimate(containerRef)
    const animations = useRef<Animation[]>([])

    useEffect(() => {
        const container = containerRef.current
        if (!container || prefersReducedMotion) return

        animations.current = Array.from(container.children).map((row, index) =>
            row.animate(
                [
                    { transform: `translateX(${-distance}%)` },
                    { transform: `translateX(${distance}%)` },
                ],
                {
                    duration: ROW_DURATIONS_MS[index % ROW_DURATIONS_MS.length],
                    delay: -index * ROW_PHASE_STEP_MS,
                    direction: index % 2 ? 'alternate-reverse' : 'alternate',
                    easing: 'ease-in-out',
                    iterations: Infinity,
                },
            ),
        )

        return () => {
            animations.current.forEach((animation) => animation.cancel())
            animations.current = []
        }
    }, [containerRef, distance, prefersReducedMotion])

    useEffect(() => {
        if (!shouldAnimate) {
            animations.current.forEach((animation) => animation.pause())
            return
        }
        animations.current.forEach((animation) => animation.play())

        // updatePlaybackRate keeps the current position, so a speed change never jumps
        const setPlaybackRate = (rate: number) =>
            animations.current.forEach((animation) =>
                animation.updatePlaybackRate(rate),
            )

        let lastScrollY = window.scrollY
        let lastScrollTime = performance.now()
        let lastFrameTime = 0
        let targetBoost = 0
        let boost = 0
        let frame = 0

        const tick = (time: number) => {
            const elapsed = Math.max(time - lastFrameTime, 0)
            lastFrameTime = time
            targetBoost *= Math.exp(-elapsed / BOOST_FALL_MS)
            boost +=
                (targetBoost - boost) * (1 - Math.exp(-elapsed / BOOST_RISE_MS))

            if (targetBoost < 0.01 && boost < 0.01) {
                setPlaybackRate(1)
                frame = 0
                return
            }
            setPlaybackRate(1 + boost)
            frame = requestAnimationFrame(tick)
        }

        const onScroll = () => {
            const now = performance.now()
            const scrollSpeed =
                Math.abs(window.scrollY - lastScrollY) /
                Math.max(now - lastScrollTime, 1)
            lastScrollY = window.scrollY
            lastScrollTime = now

            targetBoost = Math.max(
                targetBoost,
                Math.min(
                    scrollSpeed * RATE_PER_SCROLL_SPEED,
                    MAX_PLAYBACK_RATE - 1,
                ),
            )
            if (!frame) {
                lastFrameTime = now
                frame = requestAnimationFrame(tick)
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll)
            cancelAnimationFrame(frame)
            setPlaybackRate(1)
        }
    }, [shouldAnimate])
}
