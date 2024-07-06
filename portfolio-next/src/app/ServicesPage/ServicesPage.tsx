import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { SubHeadline } from '@/components/Text/components/TextVariants'
import React from 'react'

export const ServicesPage = () => {
    return (
        <Frame
            header={<SubHeadline>{'<services>'}</SubHeadline>}
            contentFlexDirection="flex-col"
        >
            <FlexContainer
                flexDirection="flex-col"
                className="justify-center border h-full"
            >
                <h1>Starter Pack</h1>
                <div>Basic Design and Web Development</div>
                <div>Basic SEO setup</div>
                <div>Basic Website support and maintenance</div>
                <div>Shared Website hosting for 1 year</div>
                <div>Domain Registration</div>
                <div>Basic third party integration</div>
                <div>Total Price</div>
                <div>Ideal For Small Businesses</div>
                <FlexContainer width="w-fit" className="relative">
                    <Button>order</Button>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                flexDirection="flex-col"
                className="justify-center border h-full"
            >
                <h1>Starter Pack</h1>
                <div>Basic Design and Web Development</div>
                <div>Basic SEO setup</div>
                <div>Basic Website support and maintenance</div>
                <div>Shared Website hosting for 1 year</div>
                <div>Domain Registration</div>
                <div>Basic third party integration</div>
                <div>Total Price</div>
                <div>Ideal For Small Businesses</div>
                <FlexContainer width="w-fit" className="relative">
                    <Button>order</Button>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                flexDirection="flex-col"
                className="justify-center border h-full"
            >
                <h1>Starter Pack</h1>
                <div>Basic Design and Web Development</div>
                <div>Basic SEO setup</div>
                <div>Basic Website support and maintenance</div>
                <div>Shared Website hosting for 1 year</div>
                <div>Domain Registration</div>
                <div>Basic third party integration</div>
                <div>Total Price</div>
                <div>Ideal For Small Businesses</div>
                <FlexContainer width="w-fit" className="relative">
                    <Button>order</Button>
                </FlexContainer>
            </FlexContainer>
        </Frame>
    )
}
