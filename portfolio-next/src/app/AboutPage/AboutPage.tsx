import React from 'react'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { SubHeadline } from '@/components/Text/components/TextVariants'
import Image from 'next/image'
import portrait from '../../assets/static/portrait.png'

export const AboutPage = () => {
    return (
        <Frame
            header={<SubHeadline className="py-8">{'<About me>'}</SubHeadline>}
            contentFlexDirection="flex-col"
        >
            <FlexContainer
                flexDirection="flex-col"
                className="h-full border-r border-primary-stroke"
            >
                <FlexContainer
                    flexDirection="flex-col"
                    gap="gap-12"
                    className="h-full border-b border-primary-stroke"
                >
                    <SubHeadline>{'<About me>'}</SubHeadline>
                    <SubHeadline>
                        As a dedicated professional in the field of web
                        development, I continually seek opportunities to expand
                        my knowledge and stay current with industry trends.
                    </SubHeadline>
                    <SubHeadline>
                        My passion for technology and commitment to lifelong
                        learning enable me to adapt quickly to new challenges
                        and continuously deliver quality work.
                    </SubHeadline>
                    <SubHeadline>
                        I excel at working both collaboratively and
                        independently, demonstrating strong problem-solving
                        skills and initiative in every project I undertake. My
                        diverse skill set, coupled with a diligent work ethic,
                        positions me to create robust, high-quality solutions
                        that meet and exceed client expectations.
                    </SubHeadline>
                </FlexContainer>

                <SubHeadline>Lets make things happen!</SubHeadline>
            </FlexContainer>
            <FlexContainer className="relative w-full h-full">
                <Image
                    src={portrait}
                    alt="portrait photo"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </FlexContainer>
        </Frame>
    )
}
