import React from 'react'
import { FlexContainer } from '../FlexContainer/FlexContainer'

type InputType = 'text' | 'email'

type InputProps = {
    label: string
    type: InputType
    name: string
    placeholder: string
}

export const Input = ({ label, type, name, placeholder }: InputProps) => {
    return (
        <FlexContainer className="flex-col px-6 lg:px-12">
            <label htmlFor={name} className="lg:text-xl">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className="border-primary-stroke border bg-primary-input-background mt-4 mb-5 pl-2 py-2"
            />
        </FlexContainer>
    )
}
