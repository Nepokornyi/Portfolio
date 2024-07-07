import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { Text } from '@/components/Text/Text'
import {
    SectionHeadline,
    SubHeadline,
} from '@/components/Text/components/TextVariants'
import React from 'react'
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
                    className="justify-evenly h-full"
                >
                    <FlexContainer flexDirection="flex-col">
                        <Text>Date</Text>
                        <Text>Position</Text>
                        <Text>Company</Text>
                        <Text>Link</Text>
                    </FlexContainer>
                    <FlexContainer flexDirection="flex-col">
                        <Text>Date</Text>
                        <Text>Position</Text>
                        <Text>Company</Text>
                        <Text>Link</Text>
                    </FlexContainer>
                    <FlexContainer flexDirection="flex-col">
                        <Text>Date</Text>
                        <Text>Position</Text>
                        <Text>Company</Text>
                        <Text>Link</Text>
                    </FlexContainer>
                    <FlexContainer flexDirection="flex-col">
                        <Text>Date</Text>
                        <Text>Position</Text>
                        <Text>Company</Text>
                        <Text>Link</Text>
                    </FlexContainer>
                </FlexContainer>
            </Frame>
        </>
    )
}
