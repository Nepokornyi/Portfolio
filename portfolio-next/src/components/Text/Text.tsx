import React, { ReactNode } from 'react'

type TextProps = {
    children: ReactNode
    className?: string
}

export const Text = ({ children, className = '' }: TextProps) => {
    return (
        <span className={`px-6 lg:px-12 leading-tight ${className}`}>
            {children}
        </span>
    )
}
