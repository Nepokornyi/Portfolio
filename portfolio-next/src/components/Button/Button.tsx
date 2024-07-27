'use client'
import React, { ReactNode } from 'react'

const colorVariants = {
    default: ['bg-primary-button', 'border-primary-button'],
    lightGreen: ['bg-primary-light-green', 'border-primary-light-green'],
    darkBlue: ['bg-primary-dark-blue', 'border-primary-dark-blue'],
    blue: ['bg-primary-blue', 'border-primary-blue'],
}

export type ButtonColorVariants = keyof typeof colorVariants

type ButtonProps = {
    children: ReactNode
    color?: ButtonColorVariants
    className?: string
}

export const Button = ({
    children,
    color = 'default',
    className = '',
}: ButtonProps) => {
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
