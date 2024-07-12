import React, { ReactNode } from 'react'

type FrameContainerProps = {
    children: ReactNode
    className?: string
}

export const FrameContainer = ({
    children,
    className,
}: FrameContainerProps) => {
    return (
        <div
            className={`rectangle w-auto grid items-center relative ${className}`}
        >
            <div className="line top-left" />
            <div className="line top-right" />
            <div className="line bottom-left" />
            <div className="top-horizontal" />
            {children}
        </div>
    )
}
