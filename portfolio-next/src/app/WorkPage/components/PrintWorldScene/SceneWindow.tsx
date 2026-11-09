import { ReactNode } from 'react'
import { AppWindow } from '@/components/AppWindow/AppWindow'

type SceneWindowProps = {
    title: string
    children: ReactNode
    className?: string
}

export const SceneWindow = ({
    title,
    children,
    className = '',
}: SceneWindowProps) => (
    <AppWindow
        className={`absolute motion-safe:animate-fade-in-up ${className}`}
        title={
            <span className="ml-[1.5em] self-end border border-b-0 border-primary-hairline bg-primary-input-background px-[1em] py-[0.2em] text-[0.8em]">
                <span className="opacity-60">{title}</span>
            </span>
        }
    >
        {children}
    </AppWindow>
)
