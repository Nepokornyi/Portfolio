'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { useGlitch } from 'react-powerglitch'
import { glitchConfig } from './glitchConfig'

import logo from '../../../../assets/static/icoLogo.svg'

export const GlitchedLogo = () => {
    const { ref, startGlitch, stopGlitch } = useGlitch(glitchConfig)

    const handleMouseEnter = useCallback(() => {
        stopGlitch()
    }, [stopGlitch])

    const handleMouseLeave = useCallback(() => {
        startGlitch()
    }, [startGlitch])

    // gradient has same props as design
    return (
        <div className="relative w-fit">
            <Image
                ref={ref}
                src={logo}
                alt="logo"
                className="object-fill w-[32px] lg:w-[64px] bg-primary-background"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    )
}
