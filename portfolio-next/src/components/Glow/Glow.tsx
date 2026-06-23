import React from 'react'

type GlowProps = {
    className?: string
    /** any CSS color — use an rgba() so the blob reads as ambient light */
    color?: string
    /** tailwind blur utility, e.g. blur-[120px] */
    blur?: string
}

/**
 * Soft ambient light blob that sits behind a section's content, matching the
 * blurred glow ellipses in the design. Place inside a `relative` parent; it
 * renders behind siblings via -z-10 and never intercepts pointer events.
 */
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
