import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'

export const Textarea = () => {
    return (
        <FlexContainer className="flex-col px-6 lg:px-12">
            <label htmlFor="message" className="lg:text-xl">
                Message
            </label>
            <textarea
                name="message"
                id="message"
                placeholder="Type your query here..."
                className="border-primary-stroke border bg-primary-input-background mt-4"
                rows={5}
            />
        </FlexContainer>
    )
}
