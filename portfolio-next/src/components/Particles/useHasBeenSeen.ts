import { RefObject, useEffect, useState } from 'react'

// False until `visibleShare` (0..1) of the element is on screen for the first time, then always true
export const useHasBeenSeen = (
    ref: RefObject<HTMLElement | null>,
    visibleShare: number
) => {
    const [hasBeenSeen, setHasBeenSeen] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element || hasBeenSeen) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= visibleShare) setHasBeenSeen(true)
            },
            { threshold: visibleShare }
        )
        observer.observe(element)
        return () => observer.disconnect()
    }, [ref, visibleShare, hasBeenSeen])

    return hasBeenSeen
}
