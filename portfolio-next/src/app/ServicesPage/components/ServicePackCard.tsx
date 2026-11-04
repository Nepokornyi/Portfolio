import React from 'react'
import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { FrameContainer } from '@/components/Frame/components/FrameContainer'
import { Rectangle } from '@/components/Rectangle/Rectangle'
import { Text } from '@/components/Text/Text'
import { jura, mavenPro } from '@/app/fonts'
import { ServiceCard } from '../types'

export const ServicePackCard = ({ service }: { service: ServiceCard }) => {
    return (
        <FrameContainer className="gap-4 pt-7 pb-10">
            <Rectangle
                variant="default"
                className={`absolute -left-2 top-8 bg-${service.color}`}
            />
            <Text
                className={`${mavenPro.className} text-lg font-bold text-${service.color}`}
            >
                {service.title} Pack:
            </Text>
            <Text className="text-sm">{service.motivation}</Text>

            <details name="service-packs" className="group mx-6 text-sm">
                <summary
                    className={`w-fit cursor-pointer list-none [&::-webkit-details-marker]:hidden text-${service.color}`}
                >
                    <span className="group-open:hidden">Read more ↓</span>
                    <span className="hidden group-open:inline">
                        Read less ↑
                    </span>
                </summary>
                <ul className={`${jura.className} mt-4`}>
                    {service.items.map((item) => (
                        <li
                            key={item.description}
                            className="flex justify-between gap-4 py-2 border-b border-primary-hairline"
                        >
                            <span>{item.description}</span>
                            <span className="shrink-0 font-bold">
                                {item.price === 0 ? 'FREE' : `$${item.price}`}
                            </span>
                        </li>
                    ))}
                </ul>
                <p className={`${jura.className} mt-3 font-bold`}>
                    Total: ${service.totalPrice}
                </p>
            </details>

            <FlexContainer width="w-fit" className="absolute -bottom-4 right-4">
                <Button color={service.button}>order</Button>
            </FlexContainer>
        </FrameContainer>
    )
}
