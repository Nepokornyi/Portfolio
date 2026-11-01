import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { HamburgerMenu } from './components/HamburgerMenu/HamburgerMenu'
import { Navigation } from './components/Navigation'

export const Header = () => {
    return (
        <FlexContainer className="absolute w-full top-0 left-0 justify-end items-center px-6 lg:px-12 py-8">
            <div className="hidden lg:block">
                <Navigation />
            </div>
            <div className="lg:hidden">
                <HamburgerMenu />
            </div>
        </FlexContainer>
    )
}
