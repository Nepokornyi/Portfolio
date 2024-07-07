import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { HamburgerMenu } from './components/HamburgerMenu/HamburgerMenu'
import { GlitchedLogo } from './components/GlitchedLogo/GlitchedLogo'
import { Navigation } from './components/Navigation'

export const Header = () => {
    return (
        <FlexContainer className="hidden lg:flex absolute w-full top-0 left-0 justify-between items-center px-12 py-8">
            <GlitchedLogo />
            <Navigation />
        </FlexContainer>
    )
}

export const MobileHeader = () => {
    return (
        <FlexContainer className="flex w-full justify-between items-center px-6 py-8">
            <GlitchedLogo />
            <HamburgerMenu />
        </FlexContainer>
    )
}
