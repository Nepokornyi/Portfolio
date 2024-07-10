import React from 'react'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { Button } from '@/components/Button/Button'
import { LandingHeadline } from './Components/LandingHeadline'
import { Sphere } from './Components/Sphere/Sphere'
import { Header, MobileHeader } from '@/components/Header/Headers'

//* didn't think of better solution than create two separate headers for mobile and desktop layout because of design specifics

export const LandingPage = () => {
    return (
        <Frame header={<MobileHeader />}>
            <FlexContainer
                flexDirection="flex-col"
                className="min-h-[300px] lg:min-h-[500px] justify-center"
            >
                <Header />
                <LandingHeadline />
                {/* <Sphere /> */}
                <Button className="absolute bottom-8 lg:bottom-12 right-6 lg:right-12">
                    download CV
                </Button>
            </FlexContainer>
        </Frame>
    )
}
