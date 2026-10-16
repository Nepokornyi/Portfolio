'use client'

import dynamic from 'next/dynamic'

// three.js is heavy — load it after the page so the text shows first
const ParticlesCanvas = dynamic(
    () => import('./ParticlesCanvas').then((module) => module.ParticlesCanvas),
    { ssr: false },
)

type ParticlesProps = {
    label?: string
    className?: string
}

export const Particles = ({ label, className = '' }: ParticlesProps) => {
    return (
        <div
            role={label ? 'img' : undefined}
            aria-label={label}
            aria-hidden={!label}
            className={`absolute pointer-events-none ${className}`}
        >
            <ParticlesCanvas />
        </div>
    )
}
