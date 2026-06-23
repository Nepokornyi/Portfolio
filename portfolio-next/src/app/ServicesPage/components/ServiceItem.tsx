import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { ServiceItemProps } from '../types'
import { jura } from '@/app/fonts'

export const ServiceItem = ({ description, price }: ServiceItemProps) => {
    return (
        <FlexContainer flexDirection="flex-col" className={jura.className}>
            <Text className="mb-5">{description}</Text>
            <Text className="font-bold">
                {price === 0 ? 'FREE' : `$${price}`}
            </Text>
        </FlexContainer>
    )
}
