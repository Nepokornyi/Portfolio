import React from 'react'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import {
    BasicText,
    SectionHeadline,
} from '@/components/Text/components/TextVariants'

const descriptionText = [
    {
        id: 'first',
        text: 'As a dedicated professional in the field of web development, I continually seek opportunities to expand my knowledge and stay current with industry trends.',
    },
    {
        id: 'second',
        text: 'My passion for technology and commitment to lifelong learning enable me to adapt quickly to new challenges and continuously deliver quality work.',
    },
    {
        id: 'third',
        text: 'I excel at working both collaboratively and independently, demonstrating strong problem-solving skills and initiative in every project I undertake. My diverse skill set, coupled with a diligent work ethic, positions me to create robust, high-quality solutions that meet and exceed client expectations.',
    },
]

export const AboutDescription = () => {
    return (
        <>
            <FlexContainer
                flexDirection="flex-col"
                className="h-full lg:border-r border-primary-stroke"
            >
                <SectionHeadline className="hidden lg:block">
                    {'<about me>'}
                </SectionHeadline>
                <FlexContainer
                    flexDirection="flex-col"
                    className="h-full border-b border-primary-stroke gap-10 py-10 lg:py-0 lg:pb-10"
                >
                    {descriptionText.map((item) => {
                        return (
                            <BasicText
                                key={item.id}
                                className="lg:text-about-clamp"
                            >
                                {item.text}
                            </BasicText>
                        )
                    })}
                </FlexContainer>
            </FlexContainer>
            <FlexContainer className="h-full w-full border-t lg:border-t-0 lg:border-r border-primary-stroke py-5 lg:py-6 row-start-4 row-end-5 lg:row-auto">
                <Text className="flex items-center xm:text-lg sm:text-xl xl:text-3xl">
                    Lets make things happen!
                </Text>
            </FlexContainer>
        </>
    )
}
