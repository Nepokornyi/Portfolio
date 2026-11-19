import { useEffect, useEffectEvent, useLayoutEffect, useRef } from 'react'
import { CursorPosition } from '@/app/WorkPage/components/SceneCursor'

const isRendered = (element: HTMLElement) => element.offsetParent !== null

const getUntransformedCentre = (
    element: HTMLElement,
    canvas: HTMLElement,
): CursorPosition => {
    let left = element.offsetLeft + element.offsetWidth / 2
    let top = element.offsetTop + element.offsetHeight / 2
    let node = element
    while (node.offsetParent && node.offsetParent !== canvas) {
        node = node.offsetParent as HTMLElement
        left += node.offsetLeft + node.clientLeft
        top += node.offsetTop + node.clientTop
    }

    return {
        x: (left / canvas.clientWidth) * 100,
        y: (top / canvas.clientHeight) * 100,
    }
}

const getCursorPosition = (
    canvas: HTMLElement,
    target: string,
    fallback: CursorPosition | null,
) => {
    if (!isRendered(canvas)) return null

    const targetElement = canvas.querySelector<HTMLElement>(
        `[data-cursor-target="${target}"]`,
    )
    return targetElement && isRendered(targetElement)
        ? getUntransformedCentre(targetElement, canvas)
        : fallback
}

export const useSceneCursorPosition = (
    target: string,
    fallback: CursorPosition | null,
) => {
    const canvasRef = useRef<HTMLDivElement>(null)
    const cursorRef = useRef<HTMLDivElement>(null)

    const placeCursor = useEffectEvent(() => {
        const canvas = canvasRef.current
        const cursor = cursorRef.current
        if (!canvas || !cursor) return

        const position = getCursorPosition(canvas, target, fallback)
        cursor.hidden = !position
        if (!position) return
        cursor.style.left = `${position.x}%`
        cursor.style.top = `${position.y}%`
    })

    useLayoutEffect(() => {
        placeCursor()
    })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const observer = new ResizeObserver(() => placeCursor())
        observer.observe(canvas)
        return () => observer.disconnect()
    }, [])

    return { canvasRef, cursorRef }
}
