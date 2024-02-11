import React from 'react'
import { Frame } from '../../components/Frame/Frame'
import { Heading } from '../../components/Heading/Heading'

import { AboutPageDescription } from './components/AboutPageDescription'
import { AboutPagePicture } from './components/AboutPagePicture'

const AppHeaderText = '<About me>'
const AppHeader = <Heading variant="chapter">{AppHeaderText}</Heading>

export const AboutPage = () => {
    return (
        <Frame header={AppHeader}>
            <AboutPageDescription />
            <AboutPagePicture />
        </Frame>
    )
}
