import { Montserrat } from 'next/font/google'
import MontserratAlt from 'next/font/local'

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

export const montserratAlt = MontserratAlt({
    src: '../assets/fonts/Montserrat-Alt1/MontserratAlt1-Bold.ttf',
    display: 'swap',
})
