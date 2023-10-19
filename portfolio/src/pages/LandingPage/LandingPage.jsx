import styled from 'styled-components';
import Frame from '../../components/Frame/Frame';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import { CallButton } from '../../components/SharedComponents';

const IntroCallButton = styled(CallButton)`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0 50px 50px 0;
`;

function LandingPage() {
    return (
        <Frame variant="default">
            <Header></Header>
            <Title></Title>
            <IntroCallButton color="#ffd600">download CV</IntroCallButton>
        </Frame>
    );
}

export default LandingPage;
