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
            className={`${montserratAlt.className} tracking-widest md:tracking-wide text-2xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl`}
        >
            {children}
        </Text>
    )
}

export const SubHeadline = ({ children, className = '' }: TextProps) => {
    return (
        <Text className={`text-sm sm:text-base xl:text-xl ml-12 ${className}`}>
            {children}
        </Text>
    )
}
