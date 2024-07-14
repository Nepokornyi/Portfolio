import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { Text } from '../Text/Text'
import { Rectangle } from '../Rectangle/Rectangle'

type CardProps = {
    date: string
    position: string
    company: string
    link?: string
    rectangleBackground: string
    color: string
}

export const Card = ({
    date,
    position,
    company,
    color,
    link,
    rectangleBackground,
}: CardProps) => {
    return (
        <FlexContainer className="px-6 lg:px-12">
            <Rectangle variant="default" className={rectangleBackground} />
            <FlexContainer flexDirection="flex-col" className="gap-1.5">
                <Text className="lg:text-sm xl:text-base">{date}</Text>
                <Text className="xl:text-2xl">{position}</Text>
                <Text className="font-bold text-xl xl:text-2xl">{company}</Text>
                <Text className={`cursor-pointer mt-2.5 w-fit ${color}`}>
                    Read more ↓
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}
