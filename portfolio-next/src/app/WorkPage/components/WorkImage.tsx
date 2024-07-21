import React from 'react'
import icoHelloBank from '../../../assets/static/icoHelloBank.jpg'
import Image from 'next/image'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'

export const WorkImage = () => {
    return (
        <FlexContainer className="min-h-[350px] max-md:min-h-[400px] h-full row-start-4 row-end-5 lg:row-span-2 border-b border-r relative">
            <Image
                src={icoHelloBank}
                alt="Hello Bank photo"
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
        </FlexContainer>
    )
}
