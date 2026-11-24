import { ReactNode } from 'react'

type TerminalPanelProps = {
    title?: ReactNode
    aside?: ReactNode
    className?: string
    children: ReactNode
}

export const TerminalPanel = ({
    title,
    aside,
    className = '',
    children,
}: TerminalPanelProps) => (
    <section
        className={`flex min-h-0 min-w-0 flex-col border border-primary-hairline ${className}`}
    >
        {title && (
            <div className="flex h-[2.2em] shrink-0 items-center gap-[0.6em] border-b border-primary-hairline px-[0.8em]">
                {title}
                {aside && (
                    <div className="ml-auto flex shrink-0 items-baseline gap-[0.6em]">
                        {aside}
                    </div>
                )}
            </div>
        )}
        {children}
    </section>
)
