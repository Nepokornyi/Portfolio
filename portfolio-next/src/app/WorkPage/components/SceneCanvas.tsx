import { ReactNode } from 'react'
import {
    CursorPosition,
    SceneCursor,
} from '@/app/WorkPage/components/SceneCursor'

// The fields that each layout of a scene has, for the canvas and the cursor
export type SceneBaseLayout<Target extends string> = {
    aspect: string
    fontSize: string
    cursor: Record<Target, CursorPosition | null>
    showPointer: boolean
}

// The cursor in each frame of a scene. The layout gives the position of each target.
export type SceneCursorState<Target extends string> = {
    target: Target
    isClicking: boolean
}

type SceneCanvasProps = {
    // An aspect ratio class, for example 'aspect-[3/2]'
    aspect: string
    // In container units, so all `em` sizes of the scene scale with the width of the canvas
    fontSize: string
    // In percent of the canvas. With null, the cursor is hidden.
    cursorPosition: CursorPosition | null
    isClicking: boolean
    showPointer: boolean
    className?: string
    children: ReactNode
}

// The outer box of a prototype scene layout: the size container, the aspect ratio, and the cursor.
// The cursor renders last, so it stays above the content.
export const SceneCanvas = ({
    aspect,
    fontSize,
    cursorPosition,
    isClicking,
    showPointer,
    className = '',
    children,
}: SceneCanvasProps) => (
    <div className={className} style={{ containerType: 'inline-size' }}>
        <div className={`relative ${aspect}`} style={{ fontSize }}>
            {children}
            <SceneCursor
                position={cursorPosition}
                isClicking={isClicking}
                showPointer={showPointer}
            />
        </div>
    </div>
)
