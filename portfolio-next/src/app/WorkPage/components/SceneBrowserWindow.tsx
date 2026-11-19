import { ReactNode } from 'react'
import { SceneAddressBar } from '@/app/WorkPage/components/SceneAddressBar'
import {
    SceneBaseLayout,
    SceneCanvas,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'
import { AppWindow } from '@/components/AppWindow/AppWindow'

type SceneBrowserWindowProps<Target extends string> = {
    address: string
    layout: SceneBaseLayout<Target>
    cursor: SceneCursorState<Target>
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
        cursorTarget={cursor.target}
        fallbackCursorPosition={layout.cursor[cursor.target] ?? null}
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
