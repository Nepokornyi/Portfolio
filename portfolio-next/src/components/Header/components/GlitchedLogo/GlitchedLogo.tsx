'use client'
import Image from 'next/image'
import React from 'react'
import { useGlitch } from 'react-powerglitch'
import { glitchConfig } from './glitchConfig'

import logo from '../../../../assets/static/icoLogo.svg'

export const GlitchedLogo = () => {
    const glitch = useGlitch(glitchConfig)

    return (
        <Image
            ref={glitch.ref}
            src={logo}
            alt="logo"
            className="object-fill w-[32px] lg:w-[64px]"
        />
    )
}
