import React, { ReactNode } from 'react'

type TextProps = {
    children: ReactNode
    className?: string
}

export const Text = ({ children, className = '' }: TextProps) => {
    return (
        <span className={`mx-6 lg:mx-12 leading-tight ${className}`}>
            {children}
        </span>
    )
}
