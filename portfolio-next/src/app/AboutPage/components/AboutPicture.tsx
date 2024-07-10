import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Image from 'next/image'
import React from 'react'
import portrait from '../../../assets/static/portraitEffect.png'

// https://picsum.photos/1920/1080

export const AboutPicture = () => {
    return (
        <FlexContainer className="min-h-[350px] max-md:min-h-[700px] h-[50vh] lg:h-full relative">
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
