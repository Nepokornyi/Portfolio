import React, { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    color?: string
    className?: string
}

export const Button = ({
    children,
    color = '#ffd600',
    className = '',
}: ButtonProps) => {
    return (
        <button
            className={`px-4 py-2 lg:px-6 lg:py-3 bg-yellow-500 text-black font-bold text-base lg:text-xl italic group ${className} `}
        >
            <span className="absolute border border-yellow-500 inset-2 w-full h-full -z-10 duration-300 group-hover:inset-1" />
            {children}
        </button>
    )
}
