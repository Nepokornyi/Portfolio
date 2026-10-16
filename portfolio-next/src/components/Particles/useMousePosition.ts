import { useEffect, useRef } from 'react'

export type MousePosition = { x: number; y: number }

export const useMousePosition = () => {
    const position = useRef<MousePosition | null>(null)

    useEffect(() => {
        const onPointerMove = (event: PointerEvent) => {
            if (event.pointerType !== 'mouse') return
            position.current = { x: event.clientX, y: event.clientY }
        }
        window.addEventListener('pointermove', onPointerMove, { passive: true })
        return () => window.removeEventListener('pointermove', onPointerMove)
    }, [])

    return position
}
