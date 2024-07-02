import React from 'react'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { Button } from '@/components/Button/Button'
import { LandingHeadline } from './Components/LandingHeadline'
import { LandingHeader, LandingMobileHeader } from './Components/LandingHeader'
import { Sphere } from './Components/Sphere/Sphere'

export const LandingPage = () => {
    return (
        <Frame header={<LandingMobileHeader />}>
            <FlexContainer flexDirection="flex-col">
                <LandingHeader />
                <LandingHeadline />
                {/* <Sphere /> */}
                <Button className="absolute bottom-8 lg:bottom-12 right-6 lg:right-12">
                    download CV
                </Button>
            </FlexContainer>
        </Frame>
    )
}
