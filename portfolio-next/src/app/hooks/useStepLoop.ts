import { RefObject, useEffect, useState } from 'react'
import {
    usePrefersReducedMotion,
    useShouldAnimate,
} from '@/app/hooks/useShouldAnimate'

export const useStepLoop = (
    containerRef: RefObject<HTMLElement | null>,
    length: number,
    stepMs: number,
    holdMs: number,
) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const shouldAnimate = useShouldAnimate(containerRef)
    const [{ step, loop }, setProgress] = useState({ step: 0, loop: 0 })

    useEffect(() => {
        if (!shouldAnimate) return

        const isComplete = step >= length
        const timeout = setTimeout(
            () =>
                setProgress(
                    isComplete
                        ? { step: 0, loop: loop + 1 }
                        : { step: step + 1, loop },
                ),
            isComplete ? holdMs : stepMs,
        )
        return () => clearTimeout(timeout)
    }, [shouldAnimate, step, loop, length, stepMs, holdMs])

    return { step: prefersReducedMotion ? length : step, loop }
}
