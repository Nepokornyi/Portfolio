import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import React from 'react'

export const ContactPage = () => {
    return (
        <Frame
            header={<h1>{'<contact me>'}</h1>}
            contentFlexDirection="flex-col"
        >
            <FlexContainer flexDirection="flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" />
                <div>social media</div>
                <FlexContainer className="relative w-fit">
                    <Button>send</Button>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer>SomeGraphic</FlexContainer>
        </Frame>
    )
}
