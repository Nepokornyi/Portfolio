import React from 'react'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { Button } from '@/components/Button/Button'
import { LandingHeadline } from './components/LandingHeadline'
import { Header } from '@/components/Header/Header'
import { HeroScene } from '@/app/LandingPage/components/HeroScene/HeroScene'

export const LandingPage = () => {
    return (
        <Frame>
            <FlexContainer
                flexDirection="flex-col"
                className="min-h-[300px] lg:min-h-[500px] justify-center"
            >
                <HeroScene />
                <Header />
                <LandingHeadline />
                <Button className="absolute bottom-8 lg:bottom-12 right-6 lg:right-12">
                    download CV
                </Button>
            </FlexContainer>
        </Frame>
    )
}
