'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { useGlitch } from 'react-powerglitch'
import { glitchConfig } from './glitchConfig'

import logo from '../../../../assets/static/icoLogo.svg'

export const GlitchedLogo = () => {
    const glitch = useGlitch(glitchConfig)

    const handleMouseEnter = useCallback(() => {
        glitch.stopGlitch()
    }, [glitch])

    const handleMouseLeave = useCallback(() => {
        glitch.startGlitch()
    }, [glitch])

    // gradient has same props as design
    return (
        <div className="relative p-4">
            <div
                className={`absolute top-0 pointer-events-none left-0 w-full h-full rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0775bd] to-black blur-[32px] lg:blur-2xl z-10`}
            />
            <Image
                ref={glitch.ref}
                src={logo}
                alt="logo"
                className={`object-fill w-[32px] lg:w-[64px] hover:${glitch.stopGlitch}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    )
}
