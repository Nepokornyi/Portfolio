import React from 'react'
import { Frame } from '@/components/Frame/Frame'
import { SectionHeadline } from '@/components/Text/components/TextVariants'
import { AboutDescription } from './components/AboutDescription'
import { AboutPicture } from './components/AboutPicture'

export const AboutPage = () => {
    return (
        <Frame
            header={<SectionHeadline>{'<about me>'}</SectionHeadline>}
            contentGridLayout="lg:grid-cols-2 lg:grid-flow-col"
        >
            <AboutDescription />
            <AboutPicture />
        </Frame>
    )
}
