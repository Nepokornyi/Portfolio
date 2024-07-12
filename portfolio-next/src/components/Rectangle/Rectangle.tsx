import React from 'react'

type RectangleProps = {
    variant: 'default' | 'small'
    color: 'button' | 'empty'
    className?: string
}

const RectangleConfig = {
    default: 'w-6 h-6',
    small: '',
    color: {
        button: 'bg-primary-highlight',
        empty: 'border border-primary-highlight',
    },
}

export const Rectangle = ({
    variant,
    color,
    className = '',
}: RectangleProps) => {
    return (
        <div
            className={`rotate-45 ${RectangleConfig[variant]} ${RectangleConfig.color[color]} ${className}`}
        />
    )
}
