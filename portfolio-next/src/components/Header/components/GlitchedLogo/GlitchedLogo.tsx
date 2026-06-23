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
        <div className="relative w-fit">
            <Image
                ref={glitch.ref}
                src={logo}
                alt="logo"
                className={`object-fill w-[32px] lg:w-[64px] bg-primary-background hover:${glitch.stopGlitch}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    )
}
