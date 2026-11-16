import { ReactNode } from 'react'

type DashboardPanelProps = {
    title: ReactNode
    aside?: ReactNode
    className?: string
    children: ReactNode
}

export const DashboardPanel = ({
    title,
    aside,
    className = '',
    children,
}: DashboardPanelProps) => (
    <div
        className={`flex min-h-0 min-w-0 flex-col border border-primary-hairline ${className}`}
    >
        <div className="flex h-[1.4em] shrink-0 items-center justify-between gap-[0.6em]">
            <span className="min-w-0 truncate text-[0.8em] font-bold text-white">
                {title}
            </span>
            {aside}
        </div>
        {children}
    </div>
)
