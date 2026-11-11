import { RefObject, useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/app/hooks/useShouldAnimate'

export const useActiveSlide = (trackRef: RefObject<HTMLElement | null>) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const targetIndexRef = useRef<number | null>(null)
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const getScrolledIndex = () =>
            Math.round(track.scrollLeft / track.clientWidth)

        const updateActiveIndex = () => {
            const scrolledIndex = getScrolledIndex()
            const isOnTheWayToTarget =
                targetIndexRef.current !== null &&
                targetIndexRef.current !== scrolledIndex
            if (isOnTheWayToTarget) return

            targetIndexRef.current = null
            setActiveIndex(scrolledIndex)
        }

        // A swipe can stop the scroll before it reaches the target
        const syncWithScrollPosition = () => {
            targetIndexRef.current = null
            setActiveIndex(getScrolledIndex())
        }

        track.addEventListener('scroll', updateActiveIndex, { passive: true })
        track.addEventListener('scrollend', syncWithScrollPosition)
        return () => {
            track.removeEventListener('scroll', updateActiveIndex)
            track.removeEventListener('scrollend', syncWithScrollPosition)
        }
    }, [trackRef])

    const scrollToSlide = (index: number) => {
        const track = trackRef.current
        if (!track) return

        targetIndexRef.current = index
        setActiveIndex(index)
        track.scrollTo({
            left: index * track.clientWidth,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
        })
    }

    return { activeIndex, scrollToSlide }
}
