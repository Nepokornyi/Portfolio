import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MainHeading, SubHeading } from '../../components/SharedComponents';

const HeadingsWrapper = styled.div`
    width: 90%;
`;

const Slash = styled.span`
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 14px;
    margin-right: 15px;
`;

function Title() {
    const { t } = useTranslation();

    return (
        <HeadingsWrapper>
            <MainHeading>
                {t('pages.landing.title_1')} <br /> {t('pages.landing.title_2')}
            </MainHeading>
            <div style={{ display: 'flex' }}>
                <Slash>//</Slash>
                <SubHeading>
                    {t('pages.landing.subtitle_1')} <br /> {t('pages.landing.subtitle_2')}
                </SubHeading>
            </div>
        </HeadingsWrapper>
    );
}

export default Title;
