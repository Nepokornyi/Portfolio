import { AboutPage } from './AboutPage/AboutPage'
import { ContactPage } from './ContactPage/ContactPage'
import { ExperiencePage } from './ExperiencePage/ExperiencePage'
import { LandingPage } from './LandingPage/LandingPage'
import { ServicesPage } from './ServicesPage/ServicesPage'
import { WorkPage } from './WorkPage/WorkPage'

export default function App() {
    return (
        <>
            <LandingPage />
            <AboutPage />
            <ExperiencePage />
            <WorkPage />
            <ServicesPage />
            <ContactPage />
        </>
    )
}
