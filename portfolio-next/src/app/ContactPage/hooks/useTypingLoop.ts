import { RefObject, useEffect, useState } from 'react'
import {
    usePrefersReducedMotion,
    useShouldAnimate,
} from '@/app/hooks/useShouldAnimate'
import { RESTART_DELAY_MS, TYPE_DELAY_MS } from '@/app/ContactPage/const'

// Counts typed characters from 0 to `length`, holds the full text, then starts again
export const useTypingLoop = (
    containerRef: RefObject<HTMLElement | null>,
    length: number,
) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const shouldAnimate = useShouldAnimate(containerRef)
    const [typedCount, setTypedCount] = useState(0)

    useEffect(() => {
        if (!shouldAnimate) return

        const isComplete = typedCount >= length
        const timeout = setTimeout(
            () => setTypedCount(isComplete ? 0 : typedCount + 1),
            isComplete ? RESTART_DELAY_MS : TYPE_DELAY_MS,
        )
        return () => clearTimeout(timeout)
    }, [shouldAnimate, typedCount, length])

    return prefersReducedMotion ? length : typedCount
}
