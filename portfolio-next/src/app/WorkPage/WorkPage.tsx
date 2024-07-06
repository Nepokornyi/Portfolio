import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { Text } from '@/components/Text/Text'
import { SubHeadline } from '@/components/Text/components/TextVariants'
import React from 'react'

export const WorkPage = () => {
    return (
        <Frame header={<SubHeadline>{'<work>'}</SubHeadline>}>
            <FlexContainer
                flexDirection="flex-col"
                className="h-full items-center"
            >
                <FlexContainer className="h-full flex-col lg:flex-row">
                    <FlexContainer flexDirection="flex-col">
                        <Text>{'<work>'}</Text>
                        <Text>Picture</Text>
                    </FlexContainer>

                    <FlexContainer flexDirection="flex-col">
                        <Text>Featured Project</Text>

                        <Text>Hello Bank</Text>
                        <Text>
                            As part of a dynamic team, I played a pivotal role
                            in the development of a transformable e-commerce
                            solution for HelloBank.
                        </Text>
                        <Text>Read more →</Text>

                        <Text>Technologies:</Text>
                        <Text>React, Typescript</Text>

                        <Text>Apps:</Text>
                        <Text>Figma, Postman, VSCode, GitLab</Text>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer className="relative w-fit">
                    <Button>see more</Button>
                </FlexContainer>
            </FlexContainer>
        </Frame>
    )
}
