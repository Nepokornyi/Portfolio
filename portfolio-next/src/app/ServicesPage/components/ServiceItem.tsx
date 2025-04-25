import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { ServiceItemProps } from '../types'

export const ServiceItem = ({ description, price }: ServiceItemProps) => {
    return (
        <FlexContainer flexDirection="flex-col">
            <Text className="mb-5">{description}</Text>
            <Text className="font-bold">${price}</Text>
        </FlexContainer>
    )
}
