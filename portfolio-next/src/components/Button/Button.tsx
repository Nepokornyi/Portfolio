'use client'
import React, { ReactNode } from 'react'

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
            className={`w-[110px] lg:w-[180px] py-2 lg:py-3 font-bold text-xs lg:text-xl italic group text-black ${colorVariants[color][0]} ${className} `}
        >
            <span
                className={`absolute border ${colorVariants[color][1]} inset-2 w-full h-full -z-10 duration-300 group-hover:inset-1`}
            />
            {children}
        </button>
    )
}
