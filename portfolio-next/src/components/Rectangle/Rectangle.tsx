import React from 'react'

type RectangleProps = {
    variant: 'default' | 'small'
    className?: string
}

const RectangleConfig = {
    default: 'w-4 h-4 lg:w-6 lg:h-6',
    small: '',
}

export const Rectangle = ({ variant, className = '' }: RectangleProps) => {
    return (
        <div className={`rotate-45 ${RectangleConfig[variant]} ${className}`} />
    )
}
