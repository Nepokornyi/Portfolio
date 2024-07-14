import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Image from 'next/image'
import React from 'react'
import portrait from '../../../assets/static/portraitEffect.png'
import { Rectangle } from '@/components/Rectangle/Rectangle'

// https://picsum.photos/1920/1080

export const AboutPicture = () => {
    return (
        <FlexContainer className="min-h-[350px] max-md:min-h-[700px] h-[50vh] lg:h-full row-span-2 relative">
            <Rectangle
                variant="default"
                className="absolute top-1/4 -right-2 lg:-right-3 z-10 border border-primary-highlight"
            />
            <Rectangle
                variant="default"
                className="absolute top-1/3 -right-2 lg:-right-3 z-10 bg-primary-highlight"
            />
            <Image
                src={portrait}
                alt="portrait photo"
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
        </FlexContainer>
    )
}
