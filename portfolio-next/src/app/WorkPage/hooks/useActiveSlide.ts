import { RefObject, useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '@/app/hooks/useShouldAnimate'

export const useActiveSlide = (trackRef: RefObject<HTMLElement | null>) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const updateActiveIndex = () =>
            setActiveIndex(Math.round(track.scrollLeft / track.clientWidth))

        track.addEventListener('scroll', updateActiveIndex, { passive: true })
        return () => track.removeEventListener('scroll', updateActiveIndex)
    }, [trackRef])

    const scrollToSlide = (index: number) => {
        const track = trackRef.current
        if (!track) return

        track.scrollTo({
            left: index * track.clientWidth,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
        })
    }

    return { activeIndex, scrollToSlide }
}
