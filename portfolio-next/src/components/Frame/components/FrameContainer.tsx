import React, { ReactNode } from 'react'

type FrameContainerProps = {
    children: ReactNode
    className?: string
    isHalfWidth?: boolean
}

export const FrameContainer = ({
    children,
    className,
    isHalfWidth = false,
}: FrameContainerProps) => {
    return (
        <div
            className={`rectangle w-full ${
                isHalfWidth ? 'max-w-[960px]' : 'max-w-[1920px]'
            } grid items-center relative ${className}`}
        >
            <div className="line top-left" />
            <div className="line top-right" />
            <div className="line bottom-left" />
            <div className="top-horizontal" />
            <div className="left-vertical" />
            {children}
        </div>
    )
}
