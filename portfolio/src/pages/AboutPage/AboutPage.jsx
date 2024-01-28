import React from 'react'
import { Frame } from '../../components/Frame/Frame'
import { Heading } from '../../components/Heading/Heading'

import { AboutPageDescription } from './components/AboutPageDescription'
import { AboutPagePicture } from './components/AboutPagePicture'

const AppHeader = <Heading variant="title">Experiment</Heading>

export const AboutPage = () => {
    return (
        <Frame header={AppHeader}>
            <AboutPageDescription />
            <AboutPagePicture />
        </Frame>
    )
}
