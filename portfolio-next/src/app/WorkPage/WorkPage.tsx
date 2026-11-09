import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { SectionHeadline } from '@/components/Text/components/TextVariants'
import { Text } from '@/components/Text/Text'

import { workProjects } from './const'
import { WorkDescription } from './components/WorkDescription'
import { WorkDetails } from './components/WorkDetails'
import { WorkImage } from './components/WorkImage'
import { WorkShowcase } from './components/WorkShowcase'

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

            <WorkShowcase
                projects={workProjects.map((project) => ({
                    title: project.title,
                    slide: (
                        <div className="grid lg:grid-cols-2 h-full">
                            <WorkImage
                                image={project.image}
                                alt={project.imageAlt}
                            />
                            <WorkDescription project={project} />
                        </div>
                    ),
                    details: <WorkDetails project={project} />,
                }))}
            />
        </Frame>
    )
}
