import React, { ReactNode } from 'react'
import './style.css'
import { FrameContainer } from './components/FrameContainer'

type FrameProps = {
    children: ReactNode
    header?: ReactNode
    isHalfWidth?: boolean
    removeRightPadding?: boolean
    hideHeaderOnWideScreen?: boolean
    contentGridLayout?: string
}

export const Frame = ({
    children,
    header,
    isHalfWidth = false,
    removeRightPadding = false,
    hideHeaderOnWideScreen = true,
    contentGridLayout = '',
}: FrameProps) => {
    const shouldRenderHeader = !!header

    return (
        <>
            <section
                className={`w-full ${
                    isHalfWidth ? 'lg:w-1/2 items-end' : 'items-center'
                } min-h-screen flex flex-col justify-center relative py-12 lg:py-24 pl-10 lg:pl-28 pr-10 ${
                    removeRightPadding ? 'lg:pr-0' : 'lg:pr-28'
                }`}
            >
                {shouldRenderHeader && (
                    <FrameContainer
                        className={`${
                            hideHeaderOnWideScreen && 'lg:hidden'
                        } mb-12 lg:mb-20`}
                        isHalfWidth={isHalfWidth}
                    >
                        {header}
                    </FrameContainer>
                )}
                <FrameContainer
                    className={`flex-grow ${contentGridLayout}`}
                    isHalfWidth={isHalfWidth}
                >
                    {children}
                </FrameContainer>
            </section>
        </>
    )
}
