/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Heading } from '../../../components/Heading/Heading'
import { useLayoutBreakpoint } from '../../../hooks/useWindowDimension'

const HeadingsWrapper = styled.div`
    width: 90%;
`

const Slash = styled.span`
    font-size: clamp(30px, 4vw, 40px);
    font-weight: 400;
    letter-spacing: 14px;
    margin-right: 15px;
`

export const AppTitle = () => {
    const { t } = useTranslation()

    const primary = useLayoutBreakpoint()

    return (
        <HeadingsWrapper $primary={primary}>
            <Heading>
                {t('pages.landing.title_1')} <br />
                {t('pages.landing.title_2')}
            </Heading>
            <div style={{ display: 'flex' }}>
                <Slash>//</Slash>
                <Heading variant="secondary">
                    {t('pages.landing.subtitle_1')} <br />
                    {t('pages.landing.subtitle_2')}
                </Heading>
            </div>
        </HeadingsWrapper>
    )
}
