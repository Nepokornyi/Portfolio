import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import {
    MainHeadline,
    SubHeadline,
} from '@/components/Text/components/TextVariants'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const LandingHeadline = () => {
    return (
        <>
            <MainHeadline>Hi, I&apos;m Vadym</MainHeadline>
            <MainHeadline>Web Developer</MainHeadline>
            <FlexContainer className="mt-4 relative" flexDirection="flex-col">
                <Text
                    className={'absolute top-0 left-0 text-4xl tracking-widest'}
                >
                    {'//'}
                </Text>
                <SubHeadline className="mt-4 sm:mt-0">
                    Front-end developer making things happen from 2020
                </SubHeadline>
                <SubHeadline>
                    Currently working my magic at Skoda Auto
                </SubHeadline>
            </FlexContainer>
        </>
    )
}
