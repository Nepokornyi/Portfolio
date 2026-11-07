import React from 'react'
import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { SectionHeadline } from '@/components/Text/components/TextVariants'
import { Text } from '@/components/Text/Text'

import { workProjects } from './const'
import { WorkCarousel } from './components/WorkCarousel'
import { WorkDescription } from './components/WorkDescription'
import { WorkImage } from './components/WorkImage'

export const WorkPage = () => {
    return (
        <Frame
            id="work"
            header={<SectionHeadline>{'<work>'}</SectionHeadline>}
            contentGridLayout="lg:grid-cols-2"
        >
            <FlexContainer className="hidden h-full lg:flex items-center border-b">
                <Text className="lg:text-4xl my-6 lg:my-8">{'<work>'}</Text>
            </FlexContainer>

            <FlexContainer className="h-full items-center border-b lg:border-l">
                <Text className="text-lg lg:text-4xl lg:mr-0 my-6 lg:my-8 font-bold text-primary-dark-blue">
                    Featured Project
                </Text>
            </FlexContainer>

            <WorkCarousel
                slides={workProjects.map((project) => ({
                    label: project.title,
                    content: (
                        <div className="grid lg:grid-cols-2 h-full">
                            <WorkImage
                                image={project.image}
                                alt={project.imageAlt}
                            />
                            <WorkDescription project={project} />
                        </div>
                    ),
                }))}
            />

            <FlexContainer className="lg:col-span-2 justify-center my-12 lg:my-20">
                <FlexContainer width="w-fit" className="relative ">
                    <Button>see more</Button>
                </FlexContainer>
            </FlexContainer>
        </Frame>
    )
}
