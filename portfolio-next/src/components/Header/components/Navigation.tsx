import React from 'react'

const navigationList = [
    { text: '<about>', link: '/about' },
    { text: '<experience>', link: '/experience' },
    { text: '<work>', link: '/work' },
    { text: '<services>', link: '/services' },
    { text: '<contact>', link: '/contact' },
]

export const Navigation = () => {
    return (
        <nav className={'flex gap-8'}>
            {navigationList.map((item) => (
                <span key={item.text} className="text-lg">
                    <a href={item.link}>{item.text}</a>
                </span>
            ))}
        </nav>
    )
}
