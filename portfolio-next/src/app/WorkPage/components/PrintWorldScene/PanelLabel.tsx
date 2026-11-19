import { ReactNode } from 'react'

export const PanelLabel = ({ children }: { children: ReactNode }) => (
    <span className="shrink-0 text-[0.7em] uppercase tracking-[0.15em] text-white/40">
        {children}
    </span>
)
