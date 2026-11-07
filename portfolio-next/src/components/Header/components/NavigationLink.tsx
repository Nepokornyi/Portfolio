'use client'
import React from 'react'
import { useTextScramble } from '@/components/Header/hooks/useTextScramble'

type NavigationLinkProps = {
    label: string
    sectionId: string
}

export const NavigationLink = ({ label, sectionId }: NavigationLinkProps) => {
    const { displayText, scramble } = useTextScramble(label)

    // A button, not an <a href="#id">, so the URL stays clean.
    // No `behavior` option: the scroll follows `scroll-behavior` in globals.css,
    // which is smooth only if the user allows motion
    const scrollToSection = () =>
        document.getElementById(sectionId)?.scrollIntoView()

    return (
        <button
            type="button"
            aria-label={label}
            onClick={scrollToSection}
            onMouseEnter={scramble}
            onFocus={scramble}
            className="text-lg transition-colors duration-300 hover:text-primary-stroke focus-visible:text-primary-stroke"
        >
            {'<'}
            {/* Each letter keeps the width of the real letter, so random
                letters do not move the other links */}
            {label.split('').map((char, index) => (
                <span key={index} className="relative inline-block">
                    <span className="invisible">{char}</span>
                    <span className="absolute left-1/2 top-0 -translate-x-1/2">
                        {displayText[index]}
                    </span>
                </span>
            ))}
            {'>'}
        </button>
    )
}
