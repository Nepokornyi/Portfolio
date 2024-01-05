import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ExperiencePage } from './pages/ExperiencePage/ExperiencePage'
import { WorkPage } from './pages/WorkPage/WorkPage'
import { ServicesPage } from './pages/ServicesPage/ServicesPage'

import './i18n'
import { ContactPage } from './pages/ContactPage/ContactPage'

const MainPage = () => {
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

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </>
    )
}
