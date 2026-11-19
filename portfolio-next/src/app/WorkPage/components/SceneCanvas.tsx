import { ReactNode } from 'react'
import {
    CursorPosition,
    SceneCursor,
} from '@/app/WorkPage/components/SceneCursor'
import { useSceneCursorPosition } from '@/app/WorkPage/hooks/useSceneCursorPosition'

export type SceneBaseLayout<Target extends string> = {
    aspect: string
    fontSize: string
    cursor: Partial<Record<Target, CursorPosition | null>>
    showPointer: boolean
}

export type SceneCursorState<Target extends string> = {
    target: Target
    isClicking: boolean
}

type SceneCanvasProps = {
    aspect: string
    fontSize: string
    cursorTarget: string
    fallbackCursorPosition: CursorPosition | null
    isClicking: boolean
    showPointer: boolean
    className?: string
    children: ReactNode
}

export const SceneCanvas = ({
    aspect,
    fontSize,
    cursorTarget,
    fallbackCursorPosition,
    isClicking,
    showPointer,
    className = '',
    children,
}: SceneCanvasProps) => {
    const { canvasRef, cursorRef } = useSceneCursorPosition(
        cursorTarget,
        fallbackCursorPosition,
    )

    return (
        <div className={className} style={{ containerType: 'inline-size' }}>
            <div
                ref={canvasRef}
                className={`relative ${aspect}`}
                style={{ fontSize }}
            >
                {children}
                <SceneCursor
                    ref={cursorRef}
                    isClicking={isClicking}
                    showPointer={showPointer}
                />
            </div>
        </div>
    )
}
