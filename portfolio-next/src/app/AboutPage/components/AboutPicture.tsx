import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import React from 'react'
import { Rectangle } from '@/components/Rectangle/Rectangle'
import { Glow } from '@/components/Glow/Glow'
import { Particles } from '@/components/Particles/Particles'

// https://picsum.photos/1920/1080

export const AboutPicture = () => {
    return (
        <FlexContainer className="min-h-[350px] max-md:min-h-[700px] h-[50vh] lg:h-full row-span-2 relative">
            <Glow
                color="rgba(76, 161, 174, 0.55)"
                blur="blur-[110px]"
                className="-inset-8"
            />
            <Rectangle
                variant="default"
                className="absolute top-1/4 -right-2 lg:-right-3 z-10 border border-primary-highlight"
            />
            <Rectangle
                variant="default"
                className="absolute top-1/3 -right-2 lg:-right-3 z-10 bg-primary-highlight"
            />
            <Particles
                label="Portrait of Vadym made of glowing dots"
                className="inset-0"
            />
        </FlexContainer>
    )
}
