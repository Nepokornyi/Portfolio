import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Frame from '../components/Frame/Frame';
import { MainHeading, SubHeading } from '../components/SharedComponents';

const HeadingsWrapper = styled.div`
    width: 90%;
`;

function LandingPage() {
    const { t } = useTranslation();

    return (
        <Frame variant="default">
            <HeadingsWrapper>
                <MainHeading>
                    {t('pages.landing.title_1')} <br /> {t('pages.landing.title_2')}
                </MainHeading>
                <SubHeading>
                    {t('pages.landing.subtitle_1')} <br /> {t('pages.landing.subtitle_2')}
                </SubHeading>
            </HeadingsWrapper>
        </Frame>
    );
}

export default LandingPage;
