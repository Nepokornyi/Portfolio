import React, { ReactNode } from 'react'
import './style.css'
import { FrameContainer } from './components/FrameContainer'

type FrameProps = {
    children: ReactNode
    header?: ReactNode
    layout?: 'h-screen' | 'min-h-full'
    isHalfWidth?: boolean
    removeRightPadding?: boolean
    hideHeaderOnWideScreen?: boolean
    contentFlexDirection?: 'flex-col' | 'flex-row'
}

export const Frame = ({
    children,
    header,
    isHalfWidth = false,
    layout = 'h-screen',
    removeRightPadding = false,
    hideHeaderOnWideScreen = true,
    contentFlexDirection,
}: FrameProps) => {
    const shouldRenderHeader = !!header

    return (
        <>
            <section
                className={`w-full ${
                    isHalfWidth && 'lg:w-1/2'
                } ${layout} flex flex-col justify-center relative`}
            >
                {shouldRenderHeader && (
                    <FrameContainer
                        className={`${
                            hideHeaderOnWideScreen && 'lg:hidden'
                        } mt-12 mb-0 ml-10 lg:ml-28 mr-10 ${
                            removeRightPadding ? 'lg:mr-0' : 'lg:mr-28'
                        }`}
                    >
                        {header}
                    </FrameContainer>
                )}
                <FrameContainer
                    className={`h-full ${contentFlexDirection} lg:flex-row my-12 lg:my-24 ml-10 lg:ml-28 mr-10 ${
                        removeRightPadding ? 'lg:mr-0' : 'lg:mr-28'
                    } `}
                >
                    {children}
                </FrameContainer>
            </section>
        </>
    )
}
