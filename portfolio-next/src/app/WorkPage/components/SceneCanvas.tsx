import { ReactNode } from 'react'
import {
    CursorPosition,
    SceneCursor,
} from '@/app/WorkPage/components/SceneCursor'

export type SceneBaseLayout<Target extends string> = {
    aspect: string
    fontSize: string
    cursor: Record<Target, CursorPosition | null>
    showPointer: boolean
}

export type SceneCursorState<Target extends string> = {
    target: Target
    isClicking: boolean
}

type SceneCanvasProps = {
    aspect: string
    fontSize: string
    cursorPosition: CursorPosition | null
    isClicking: boolean
    showPointer: boolean
    className?: string
    children: ReactNode
}

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
