import { ReactNode } from 'react'
import { SceneCursor } from '@/app/WorkPage/components/SceneCursor'
import { useSceneCursorPosition } from '@/app/WorkPage/hooks/useSceneCursorPosition'
import { CursorPosition } from '@/app/WorkPage/lib/sceneCursor'

export type SceneBaseLayout = {
    idleCursor: CursorPosition | null
    showPointer: boolean
}

export type SceneCursorState<Target extends string> = {
    target: Target
    isClicking: boolean
}

type SceneCanvasProps = {
    cursorTarget: string
    idleCursor: CursorPosition | null
    isClicking: boolean
    showPointer: boolean
    className?: string
    children: ReactNode
}

export const SceneCanvas = ({
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
        <div
            ref={canvasRef}
            className={`absolute inset-0 my-auto ${className}`}
        >
            {children}
            <SceneCursor
                ref={cursorRef}
                isClicking={isClicking}
                showPointer={showPointer}
            />
        </div>
    )
}
