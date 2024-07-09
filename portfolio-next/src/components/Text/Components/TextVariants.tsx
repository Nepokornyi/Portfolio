import React, { ReactNode } from 'react'
import { Text } from '../Text'
import { montserratAlt } from '@/app/fonts'

type TextProps = {
    children: ReactNode
    className?: string
}

export const MainHeadline = ({ children }: TextProps) => {
    return (
        <Text
            className={`${montserratAlt.className} tracking-widest md:tracking-wide text-2xl sm:text-5xl md:text-7xl xl:text-8xl`}
        >
            {children}
        </Text>
    )
}

export const SubHeadline = ({ children, className = '' }: TextProps) => {
    return (
        <Text className={`text-sm md:text-base xl:text-xl ${className}`}>
            {children}
        </Text>
    )
}

export const SectionHeadline = ({ children, className = '' }: TextProps) => {
    return (
        <Text className={`text-xl lg:text-4xl py-10 ${className}`}>
            {children}
        </Text>
    )
}

export const BasicText = ({ children, className = '' }: TextProps) => {
    return <Text className={`font-extralight ${className}`}>{children}</Text>
}
