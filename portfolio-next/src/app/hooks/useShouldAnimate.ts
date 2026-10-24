import { RefObject, useEffect, useState, useSyncExternalStore } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

const subscribeToReducedMotion = (onChange: () => void) => {
    const query = window.matchMedia(REDUCED_MOTION_QUERY)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
}

export const usePrefersReducedMotion = () =>
    useSyncExternalStore(
        subscribeToReducedMotion,
        () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
        () => false
    )

// Animate only while the element is on screen and the user allows motion
export const useShouldAnimate = (ref: RefObject<HTMLElement | null>) => {
    const [isOnScreen, setIsOnScreen] = useState(true)
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) =>
            setIsOnScreen(entry.isIntersecting)
        )
        observer.observe(element)
        return () => observer.disconnect()
    }, [ref])

    return isOnScreen && !prefersReducedMotion
}
