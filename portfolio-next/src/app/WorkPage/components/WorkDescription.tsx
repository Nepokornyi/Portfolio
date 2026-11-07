import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { WorkProject } from '../types'

type WorkDescriptionProps = {
    project: WorkProject
}

export const WorkDescription = ({ project }: WorkDescriptionProps) => {
    return (
        <>
            <FlexContainer
                flexDirection="flex-col"
                className="h-full lg:border-b justify-center"
            >
                <Text className="text-lg lg:text-4xl font-bold my-6 lg:my-8">
                    {project.title}
                </Text>
                <Text className="text-sm md:text-base min-[1700px]:text-xl mb-6 lg:mb-8">
                    {project.description}
                </Text>
            </FlexContainer>

            <FlexContainer
                flexDirection="flex-col"
                className="h-full border-b justify-center pb-5 lg:py-10"
            >
                <Text className="text-sm md:text-base lg:text-xl underline pb-1 text-white">
                    Technologies:
                </Text>
                <Text className="text-sm md:text-base min-[1700px]:text-xl mb-5 font-light">
                    {project.technologies.join(', ')}
                </Text>

                <Text className="text-sm md:text-base lg:text-xl underline pb-1 text-white">
                    Apps:
                </Text>
                <Text className="text-sm md:text-base min-[1700px]:text-xl font-light">
                    {project.apps.join(', ')}
                </Text>
            </FlexContainer>
        </>
    )
}
