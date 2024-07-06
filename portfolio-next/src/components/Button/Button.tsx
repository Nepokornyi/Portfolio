'use client'
import React, { ReactNode, useEffect } from 'react'

type ButtonProps = {
    children: ReactNode
    color?: 'default'
    className?: string
}

export const Button = ({
    children,
    color = 'default',
    className = '',
}: ButtonProps) => {
    const colorVariants = {
        default: ['bg-primary-button', 'border-primary-button'],
    }

    return (
        <button
            className={`px-4 py-2 lg:px-6 lg:py-3 ${colorVariants[color][0]} text-black font-bold text-base lg:text-xl italic group ${className} `}
        >
            <span
                className={`absolute border ${colorVariants[color][1]} inset-2 w-full h-full -z-10 duration-300 group-hover:inset-1`}
            />
            {children}
        </button>
    )
}
