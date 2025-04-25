import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { SectionHeadline } from '@/components/Text/components/TextVariants'
import { Text } from '@/components/Text/Text'
import React from 'react'
import { ServiceItem } from './components/ServiceItem'
import { Button } from '@/components/Button/Button'
import { servicesContent } from './const'

export const ServicesPage = () => {
    const maxItems = Math.max(
        ...servicesContent.map((service) => service.items.length)
    )

    const itemRows = []
    for (let i = 0; i < maxItems; i++) {
        const row = servicesContent.map((service) => ({
            key: `item-${service.name}-${i}`,
            content: service.items[i] || null,
            name: service.name,
        }))
        itemRows.push(row)
    }

    return (
        <Frame header={<SectionHeadline>{'<services>'}</SectionHeadline>}>
            <SectionHeadline className="hidden lg:block">
                {'<services>'}
            </SectionHeadline>

            <FlexContainer className="flex-row w-full">
                {servicesContent.map((service) => (
                    <FlexContainer
                        key={`title-${service.name}`}
                        className=" border-y border-r"
                    >
                        <Text
                            className={`text-3xl font-bold my-5 text-${service.color}`}
                        >
                            {service.title}
                        </Text>
                    </FlexContainer>
                ))}
            </FlexContainer>

            {itemRows.map((row, rowIndex) => (
                <FlexContainer
                    key={`row-${rowIndex}`}
                    className="flex-row w-full"
                >
                    {row.map((service) => (
                        <FlexContainer
                            key={`item-${service.key}`}
                            className=" border-b border-r py-3"
                        >
                            <ServiceItem
                                description={service.content.description}
                                price={service.content.price}
                            />
                        </FlexContainer>
                    ))}
                </FlexContainer>
            ))}

            <FlexContainer className="flex-row w-full">
                {servicesContent.map((service) => (
                    <FlexContainer
                        key={`total-${service.name}`}
                        className=" border-b border-r py-5"
                    >
                        <Text className="font-bold">
                            Total: {service.totalPrice}
                        </Text>
                    </FlexContainer>
                ))}
            </FlexContainer>

            <FlexContainer className="flex-row w-full">
                {servicesContent.map((service) => (
                    <FlexContainer
                        key={`motivation-${service.name}`}
                        className=" border-b border-r py-5"
                    >
                        <Text className={`text-${service.color}`}>
                            {service.motivation}
                        </Text>
                    </FlexContainer>
                ))}
            </FlexContainer>

            <FlexContainer className="flex-row w-full">
                {servicesContent.map((service) => (
                    <FlexContainer
                        key={`button-${service.name}`}
                        className=" border-r py-5 justify-center"
                    >
                        <FlexContainer width="w-fit" className="relative">
                            <Button color={service.button}>order</Button>
                        </FlexContainer>
                    </FlexContainer>
                ))}
            </FlexContainer>
        </Frame>
    )
}
