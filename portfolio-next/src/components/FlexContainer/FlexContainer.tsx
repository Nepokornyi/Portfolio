import React, { ReactNode } from 'react'

type FlexContainerProps = {
    children: ReactNode
    flexDirection?: 'flex-row' | 'flex-col'
    gap?: 'gap-0' | 'gap-1'
    className?: string
}

//* I'm playing with flexbox by adding w-full to see if it fits better to my design and reusability

export const FlexContainer = ({
    children,
    flexDirection = 'flex-row',
    gap = 'gap-0',
    className = '',
}: FlexContainerProps) => {
    return (
        <div className={`w-full flex ${flexDirection} ${gap} ${className}`}>
            {children}
        </div>
    )
}
