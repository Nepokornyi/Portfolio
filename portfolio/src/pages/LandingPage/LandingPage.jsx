import { Frame } from '../../components/Frame/Frame'
import { AppTitle } from './components/AppTitle'
import { AppHeader } from './components/AppHeader'
import { IntroCallButton } from './components/IntroCallButton'
// import { Sphere } from './components/Sphere/Sphere'

export const LandingPage = () => {
    return (
        <Frame header={<AppHeader />} removeGridColumns>
            <AppTitle />
            {/* <Sphere /> */}
            <IntroCallButton>download CV</IntroCallButton>
        </Frame>
    )
}
