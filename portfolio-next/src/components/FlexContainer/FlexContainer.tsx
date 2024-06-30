import React, { ReactNode } from 'react'

type FlexContainerProps = {
    children: ReactNode
    flexDirection?: 'flex-row' | 'flex-col'
    gap?: 'gap-0' | 'gap-1'
    className?: string
}

export const FlexContainer = ({
    children,
    flexDirection = 'flex-row',
    gap = 'gap-0',
    className = '',
}: FlexContainerProps) => {
    return (
        <div className={`flex ${flexDirection} ${gap} ${className}`}>
            {children}
        </div>
    )
}
