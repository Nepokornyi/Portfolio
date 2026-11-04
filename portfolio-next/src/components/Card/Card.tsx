import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { Text } from '../Text/Text'
import { Rectangle } from '../Rectangle/Rectangle'

type CardProps = {
    date: string
    position: string
    company: string
    clients?: string[]
    link?: string
    rectangleBackground: string
    color: string
}

export const Card = ({
    date,
    position,
    company,
    clients,
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
                {clients && clients.length > 0 && (
                    <Text className="font-light lg:text-sm xl:text-base">
                        {clients.map((client, index) => (
                            <React.Fragment key={client}>
                                {index > 0 && '\u00a0· '}
                                <span className="whitespace-nowrap">
                                    {client}
                                </span>
                            </React.Fragment>
                        ))}
                    </Text>
                )}
                <Text className={`cursor-pointer mt-2.5 w-fit ${color}`}>
                    Read more ↓
                </Text>
            </FlexContainer>
        </FlexContainer>
    )
}
