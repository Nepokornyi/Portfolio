import React from 'react'
import { mavenPro } from '@/app/fonts'
import { NavigationLink } from '@/components/Header/components/NavigationLink'

// sectionId is the id of the section on the page
const navigationList = [
    { label: 'about', sectionId: 'about' },
    { label: 'experience', sectionId: 'experience' },
    { label: 'work', sectionId: 'work' },
    { label: 'services', sectionId: 'services' },
    { label: 'contact', sectionId: 'contact' },
]

export const Navigation = () => {
    return (
        <nav className={`${mavenPro.className} flex gap-8 tracking-wide`}>
            {navigationList.map((item) => (
                <NavigationLink
                    key={item.sectionId}
                    label={item.label}
                    sectionId={item.sectionId}
                />
            ))}
        </nav>
    )
}
