import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import logo from '../../../assets/static/icoLogo.png'
import Image from 'next/image'

const navigationList = [
    { text: '<about>', link: '/about' },
    { text: '<experience>', link: '/experience' },
    { text: '<work>', link: '/work' },
    { text: '<services>', link: '/services' },
    { text: '<contact>', link: '/contact' },
]

const HamburgerMenu = () => {
    return <div>Hamburger</div>
}

export const LandingHeader = () => {
    const renderNavbar = navigationList.map((item) => (
        <span key={item.text}>
            <a href={item.link}>{item.text}</a>
        </span>
    ))
    return (
        <FlexContainer className="hidden lg:flex absolute w-full top-0 left-0 justify-between items-center px-12 py-8">
            <Image src={logo} alt="logo" className="object-contain" />
            <nav className={'flex gap-8'}>{renderNavbar}</nav>
        </FlexContainer>
    )
}

export const LandingMobileHeader = () => {
    return (
        <FlexContainer className="flex w-full justify-between items-center px-6 py-8">
            <Image src={logo} alt="logo" className="object-contain" />
            <HamburgerMenu />
        </FlexContainer>
    )
}
