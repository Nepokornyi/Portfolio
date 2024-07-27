import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { SectionHeadline } from '@/components/Text/components/TextVariants'
import React from 'react'
import { ServiceItem } from './components/ServiceItem'
import { Text } from '@/components/Text/Text'

import { servicesContent } from './const'

export const ServicesPage = () => {
    return (
        <Frame header={<SectionHeadline>{'<services>'}</SectionHeadline>}>
            <SectionHeadline className="hidden lg:block">
                {'<services>'}
            </SectionHeadline>
            <FlexContainer className="flex-col lg:flex-row">
                {servicesContent.map((card) => (
                    <FlexContainer
                        key={card.name}
                        flexDirection="flex-col"
                        className="justify-evenly h-full"
                    >
                        <FlexContainer className="border-y border-r">
                            <Text
                                className={`text-3xl font-bold my-5 text-${card.color}`}
                            >
                                {card.title}
                            </Text>
                        </FlexContainer>

                        {card.items.map((item) => (
                            <ServiceItem
                                key={item.description}
                                description={item.description}
                                price={item.price}
                            />
                        ))}

                        <FlexContainer className="border-b border-r py-5">
                            <Text className="font-bold">
                                Total: {card.totalPrice}
                            </Text>
                        </FlexContainer>

                        <FlexContainer className="border-b border-r py-5">
                            <Text className={`text-${card.color}`}>
                                {card.motivation}
                            </Text>
                        </FlexContainer>

                        <FlexContainer className="border-r justify-center py-5">
                            <FlexContainer width="w-fit" className="relative">
                                <Button color={card.button}>order</Button>
                            </FlexContainer>
                        </FlexContainer>
                    </FlexContainer>
                ))}
            </FlexContainer>
        </Frame>
    )
}
