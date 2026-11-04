import React from 'react'
import { Card } from '@/components/Card/Card'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { Glow } from '@/components/Glow/Glow'
import { SectionHeadline } from '@/components/Text/components/TextVariants'
import { TechCloud } from './components/TechCloud'
import { experienceData, techCloudDesktop, techCloudMobile } from './const'

//* react node for a future scroll text effect
export const ExperiencePage = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <Frame
                header={<SectionHeadline>{'<experience>'}</SectionHeadline>}
                isHalfWidth={true}
                hideHeaderOnWideScreen={false}
                removeRightPadding={true}
            >
                <FlexContainer
                    flexDirection="flex-col"
                    className="justify-evenly h-full py-10 gap-6 relative"
                >
                    <Glow
                        color="rgba(7, 117, 189, 0.3)"
                        blur="blur-[150px]"
                        className="left-0 top-1/4 h-1/2 w-2/3"
                    />
                    {experienceData.map((item) => {
                        return (
                            <Card
                                key={item.company}
                                date={item.date}
                                position={item.position}
                                company={item.company}
                                clients={item.clients}
                                rectangleBackground={item.bgColor}
                                color={item.fontColor}
                            />
                        )
                    })}
                </FlexContainer>
            </Frame>
            <TechCloud layout={techCloudMobile} className="lg:hidden -mt-8" />
            <div className="hidden lg:flex lg:w-1/2 items-center">
                <TechCloud layout={techCloudDesktop} className="max-w-[960px]" />
            </div>
        </div>
    )
}
