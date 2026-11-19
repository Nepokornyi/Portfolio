import { useEffect, useEffectEvent, useLayoutEffect, useRef } from 'react'
import { CursorPosition } from '@/app/WorkPage/components/SceneCursor'

export const IDLE_TARGET = 'idle'
// Offsets are whole pixels, and a transform animation adds an offsetParent, so a still target can measure 1 px apart
const MEASUREMENT_TOLERANCE_PX = 2

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

const findTargetElement = (canvas: HTMLElement, target: string) => {
    const element = canvas.querySelector<HTMLElement>(
        `[data-cursor-target="${target}"]`,
    )
    return element && isRendered(element) ? element : null
}

const isWithinTolerance = (
    a: CursorPosition,
    b: CursorPosition,
    canvas: HTMLElement,
) => {
    const dx = ((a.x - b.x) / 100) * canvas.clientWidth
    const dy = ((a.y - b.y) / 100) * canvas.clientHeight
    return Math.hypot(dx, dy) <= MEASUREMENT_TOLERANCE_PX
}

const showCursorAt = (
    cursor: HTMLElement,
    position: CursorPosition | null,
) => {
    cursor.hidden = !position
    if (!position) return
    cursor.style.left = `${position.x}%`
    cursor.style.top = `${position.y}%`
}

export const useSceneCursorPosition = (
    target: string,
    idleCursor: CursorPosition | null,
) => {
    const canvasRef = useRef<HTMLDivElement>(null)
    const cursorRef = useRef<HTMLDivElement>(null)
    const shownPositionRef = useRef<CursorPosition | null>(null)

    const placeCursor = useEffectEvent(() => {
        const canvas = canvasRef.current
        const cursor = cursorRef.current
        if (!canvas || !cursor) return

        if (target === IDLE_TARGET) {
            showCursorAt(cursor, idleCursor)
            shownPositionRef.current = idleCursor
            return
        }

        const targetElement = findTargetElement(canvas, target)
        if (!targetElement) return

        const centre = getUntransformedCentre(targetElement, canvas)
        const shownPosition = shownPositionRef.current
        if (shownPosition && isWithinTolerance(centre, shownPosition, canvas))
            return

        showCursorAt(cursor, centre)
        shownPositionRef.current = centre
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
