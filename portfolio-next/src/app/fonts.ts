import { Montserrat, Maven_Pro, Jura } from 'next/font/google'
import MontserratAlt from 'next/font/local'

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    style: ['italic', 'normal'],
})

// Maven Pro — section labels (<about me>), nav menu, services pack titles
export const mavenPro = Maven_Pro({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
})

// Jura — services pricing copy
export const jura = Jura({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
})

export const montserratAlt = MontserratAlt({
    src: '../assets/fonts/Montserrat-Alt1/MontserratAlt1-Bold.ttf',
    display: 'swap',
})
