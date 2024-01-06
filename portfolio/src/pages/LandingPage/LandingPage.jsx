import { Frame } from '../../components/Frame/Frame'
import { AppTitle } from './components/AppTitle'
import { AppHeader } from './components/AppHeader'
import { IntroCallButton } from './components/IntroCallButton'
import { Sphere } from './components/Sphere'

export const LandingPage = () => {
    return (
        <Frame variant="secondary" header={<AppHeader />}>
            <AppTitle />
            <Sphere />
            <IntroCallButton>download CV</IntroCallButton>
        </Frame>
    )
}
