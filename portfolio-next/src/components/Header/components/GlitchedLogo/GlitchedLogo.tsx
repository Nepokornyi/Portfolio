'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useGlitch } from 'react-powerglitch'
import { useShouldAnimate } from '@/app/hooks/useShouldAnimate'
import { glitchConfig } from './glitchConfig'

import logo from '../../../../assets/static/icoLogo.svg'

export const GlitchedLogo = () => {
    const { ref, startGlitch, stopGlitch } = useGlitch(glitchConfig)
    const containerRef = useRef<HTMLDivElement>(null)

    const shouldAnimate = useShouldAnimate(containerRef)
    const [isHovered, setIsHovered] = useState(false)
    const shouldGlitch = shouldAnimate && !isHovered

    useEffect(() => {
        if (!shouldGlitch) return
        startGlitch()
        return stopGlitch
    }, [shouldGlitch, startGlitch, stopGlitch])

    // gradient has same props as design
    return (
        <div ref={containerRef} className="relative w-fit">
            <Image
                ref={ref}
                src={logo}
                alt="logo"
                className="object-fill w-[32px] lg:w-[64px] bg-primary-background"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </div>
    )
}
