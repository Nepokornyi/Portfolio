import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'

export const WorkDescription = () => {
    return (
        <>
            <FlexContainer
                flexDirection="flex-col"
                className="h-full lg:border-b justify-center"
            >
                <Text className="text-lg lg:text-4xl font-bold my-6 lg:my-8">
                    Hello Bank
                </Text>
                <Text className="text-sm md:text-base min-[1700px]:text-xl">
                    As part of a dynamic team, I played a pivotal role in the
                    development of a transformable e-commerce solution for
                    HelloBank.
                </Text>
                <Text className="text-sm md:text-base lg:text-xl my-6 lg:my-8 text-primary-dark-blue">
                    Read more →
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
                    React, Typescript
                </Text>

                <Text className="text-sm md:text-base lg:text-xl underline pb-1 text-white">
                    Apps:
                </Text>
                <Text className="text-sm md:text-base min-[1700px]:text-xl font-light">
                    Figma, Postman, VSCode, GitLab
                </Text>
            </FlexContainer>
        </>
    )
}
