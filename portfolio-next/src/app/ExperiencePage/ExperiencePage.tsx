import React from 'react'
import { Card } from '@/components/Card/Card'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { SectionHeadline } from '@/components/Text/components/TextVariants'

const experienceData = [
    {
        date: 'Jun 2024 - present',
        position: 'Front-End Developer',
        company: '{ Skoda Auto }',
        bgColor: 'bg-primary-light-green',
        fontColor: 'text-primary-light-green',
    },
    {
        date: 'Oct 2023 - Jun 2024',
        position: 'Front-End Developer',
        company: '{ Meonzi }',
        bgColor: 'bg-primary-green',
        fontColor: 'text-primary-green',
    },
    {
        date: 'Apr 2023 - Oct 2023',
        position: 'Front-End Developer',
        company: '{ Škoda Auto }',
        bgColor: 'bg-primary-dark-blue',
        fontColor: 'text-primary-dark-blue',
    },
    {
        date: 'Jun 2022 - Apr 2023',
        position: 'Front-End Developer',
        company: '{ Hello Bank }',
        bgColor: 'bg-primary-blue',
        fontColor: 'text-primary-blue',
    },
]

//* react node for a future scroll text effect
export const ExperiencePage = () => {
    return (
        <>
            <Frame
                header={<SectionHeadline>{'<experience>'}</SectionHeadline>}
                isHalfWidth={true}
                hideHeaderOnWideScreen={false}
                removeRightPadding={true}
            >
                <FlexContainer
                    flexDirection="flex-col"
                    className="justify-evenly h-full py-10 gap-6"
                >
                    {experienceData.map((item) => {
                        return (
                            <Card
                                key={item.company}
                                date={item.date}
                                position={item.position}
                                company={item.company}
                                rectangleBackground={item.bgColor}
                                color={item.fontColor}
                            />
                        )
                    })}
                </FlexContainer>
            </Frame>
        </>
    )
}
