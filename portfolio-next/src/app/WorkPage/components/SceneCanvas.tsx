import { ReactNode } from 'react'
import {
    CursorPosition,
    SceneCursor,
} from '@/app/WorkPage/components/SceneCursor'
import { useSceneCursorPosition } from '@/app/WorkPage/hooks/useSceneCursorPosition'

export type SceneBaseLayout = {
    aspect: string
    fontSize: string
    idleCursor: CursorPosition | null
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
    idleCursor: CursorPosition | null
    isClicking: boolean
    showPointer: boolean
    className?: string
    children: ReactNode
}

export const SceneCanvas = ({
    aspect,
    fontSize,
    cursorTarget,
    idleCursor,
    isClicking,
    showPointer,
    className = '',
    children,
}: SceneCanvasProps) => {
    const { canvasRef, cursorRef } = useSceneCursorPosition(
        cursorTarget,
        idleCursor,
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
