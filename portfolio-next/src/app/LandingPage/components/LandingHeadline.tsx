import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Glow } from '@/components/Glow/Glow'
import {
    MainHeadline,
    SubHeadline,
} from '@/components/Text/components/TextVariants'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { heroSubLines, heroTitle } from '@/app/LandingPage/const'

export const LandingHeadline = () => {
    return (
        <FlexContainer flexDirection="flex-col" className="relative w-fit">
            <Glow
                color="rgba(0, 194, 255, 0.2)"
                blur="blur-[90px]"
                className="hidden lg:block -top-10 left-0 h-[140%] w-[70%]"
            />
            <MainHeadline>Hi, I&apos;m Vadym</MainHeadline>
            <MainHeadline>{heroTitle}</MainHeadline>
            <FlexContainer className="mt-5 relative" flexDirection="flex-col">
                <Text
                    className={'absolute top-0 left-0 text-4xl tracking-widest'}
                >
                    {'//'}
                </Text>
                {heroSubLines.map((line, index) => (
                    <SubHeadline
                        key={line}
                        className={`pl-12 text-balance ${index === 0 ? 'mt-4 sm:mt-0' : ''}`}
                    >
                        {line}
                    </SubHeadline>
                ))}
            </FlexContainer>
        </FlexContainer>
    )
}
