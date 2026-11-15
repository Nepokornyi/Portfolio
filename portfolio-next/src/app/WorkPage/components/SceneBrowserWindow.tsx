import { ReactNode } from 'react'
import { SceneAddressBar } from '@/app/WorkPage/components/SceneAddressBar'
import { SceneCanvas } from '@/app/WorkPage/components/SceneCanvas'
import { CursorPosition } from '@/app/WorkPage/components/SceneCursor'
import { AppWindow } from '@/components/AppWindow/AppWindow'

export type SceneBaseLayout<Target extends string> = {
    aspect: string
    fontSize: string
    cursor: Record<Target, CursorPosition | null>
    showPointer: boolean
}

type SceneBrowserWindowProps<Target extends string> = {
    address: string
    layout: SceneBaseLayout<Target>
    cursor: { target: Target; isClicking: boolean }
    className?: string
    children: ReactNode
}

export const SceneBrowserWindow = <Target extends string>({
    address,
    layout,
    cursor,
    className,
    children,
}: SceneBrowserWindowProps<Target>) => (
    <SceneCanvas
        aspect={layout.aspect}
        fontSize={layout.fontSize}
        cursorPosition={layout.cursor[cursor.target]}
        isClicking={cursor.isClicking}
        showPointer={layout.showPointer}
        className={className}
    >
        <AppWindow
            className="absolute inset-0 motion-safe:animate-fade-in-up"
            title={<SceneAddressBar address={address} />}
        >
            {children}
        </AppWindow>
    </SceneCanvas>
)
