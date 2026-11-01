import { ReactNode } from 'react'

type AppWindowProps = {
    title: ReactNode
    children: ReactNode
    className?: string
}

export const AppWindow = ({
    title,
    children,
    className = '',
}: AppWindowProps) => (
    <div
        className={`flex flex-col border border-primary-hairline bg-primary-background ${className}`}
    >
        <div className="flex h-[2.4em] shrink-0 items-center gap-[0.5em] border-b border-primary-hairline px-[1em]">
            <span className="size-[0.75em] rounded-full bg-secondary-red" />
            <span className="size-[0.75em] rounded-full bg-secondary-yellow" />
            <span className="size-[0.75em] rounded-full bg-secondary-green" />
            {title}
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
    </div>
)
