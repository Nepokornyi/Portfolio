import React from 'react'
import { mavenPro } from '@/app/fonts'

const navigationList = [
    { text: '<about>', link: '/about' },
    { text: '<experience>', link: '/experience' },
    { text: '<work>', link: '/work' },
    { text: '<services>', link: '/services' },
    { text: '<contact>', link: '/contact' },
]

export const Navigation = () => {
    return (
        <nav className={`${mavenPro.className} flex gap-8 tracking-wide`}>
            {navigationList.map((item) => (
                <span key={item.text} className="text-lg">
                    <a href={item.link}>{item.text}</a>
                </span>
            ))}
        </nav>
    )
}
