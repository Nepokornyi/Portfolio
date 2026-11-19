import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'

type WorkImageProps = {
    image: StaticImageData
    alt: string
}

export const WorkImage = ({ image, alt }: WorkImageProps) => {
    return (
        <FlexContainer className="max-lg:aspect-[3/4] max-lg:max-h-[85svh] max-lg:[@container(min-width:480px)]:aspect-[3/2] lg:min-h-[350px] lg:h-full order-last lg:order-none lg:row-span-2 lg:border-r items-center justify-center bg-primary-dark-blue">
            <div className="relative w-3/5 h-1/2 lg:w-1/2 lg:h-2/5">
                <Image src={image} alt={alt} fill className="object-contain" />
            </div>
        </FlexContainer>
    )
}
