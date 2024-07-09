import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import Image from 'next/image'
import React from 'react'
import portrait from '../../../assets/static/portrait.jpg'

// https://picsum.photos/1920/1080

export const AboutPicture = () => {
    return (
        <FlexContainer className="relative w-full h-full">
            <Image
                src="https://picsum.photos/1920/1080"
                alt="portrait photo"
                fill
                style={{
                    objectFit: 'cover',
                }}
            />
        </FlexContainer>
    )
}
