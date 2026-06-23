import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Glow } from '@/components/Glow/Glow'
import {
    MainHeadline,
    SubHeadline,
} from '@/components/Text/components/TextVariants'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const LandingHeadline = () => {
    return (
        <FlexContainer flexDirection="flex-col" className="relative w-fit">
            <Glow
                color="rgba(0, 194, 255, 0.45)"
                blur="blur-[90px]"
                className="-top-10 left-0 h-[140%] w-full"
            />
            <MainHeadline>Hi, I&apos;m Vadym</MainHeadline>
            <MainHeadline>Web Developer</MainHeadline>
            <FlexContainer className="mt-5 relative" flexDirection="flex-col">
                <Text
                    className={'absolute top-0 left-0 text-4xl tracking-widest'}
                >
                    {'//'}
                </Text>
                <SubHeadline className="mt-4 sm:mt-0 pl-12">
                    Front-end developer, making things happen from 2020.
                </SubHeadline>
                <SubHeadline className="pl-12">
                    Currently working my magic at Škoda Auto.
                </SubHeadline>
            </FlexContainer>
        </FlexContainer>
    )
}
