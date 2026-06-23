import React from 'react'

type GlowProps = {
    className?: string
    color?: string
    blur?: string
}

export const Glow = ({
    className = '',
    color = 'rgba(7, 117, 189, 0.5)',
    blur = 'blur-[120px]',
}: GlowProps) => {
    return (
        <div
            aria-hidden
            className={`absolute -z-10 pointer-events-none rounded-full ${blur} ${className}`}
            style={{
                background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`,
            }}
        />
    )
}
