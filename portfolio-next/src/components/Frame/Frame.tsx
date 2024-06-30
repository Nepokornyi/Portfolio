import React, { ReactNode } from 'react'
import './style.css'
import { FrameContainer } from './components/FrameContainer'

type FrameProps = {
    children: ReactNode
    header?: ReactNode
    layout?: 'h-screen' | 'min-h-full'
    width?: 'w-full' | 'w-1/2'
    hideHeaderOnWideScreen?: boolean
}

export const Frame = ({
    children,
    header,
    width = 'w-full',
    layout = 'h-screen',
    hideHeaderOnWideScreen = true,
}: FrameProps) => {
    const shouldRenderHeader = !!header

    return (
        <>
            <section
                className={`${width} ${layout} flex flex-col justify-center relative`}
            >
                {shouldRenderHeader && (
                    <FrameContainer
                        className={`${
                            hideHeaderOnWideScreen && 'lg:hidden'
                        } mt-12 mb-0 mx-10 lg:mx-28`}
                    >
                        {header}
                    </FrameContainer>
                )}
                <FrameContainer className="h-full mx-10 my-12 lg:mx-28 lg:my-24">
                    {children}
                </FrameContainer>
            </section>
        </>
    )
}
