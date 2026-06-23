import React from 'react'

export const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className="w-full bg-primary-blue text-[#151515] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-1 lg:gap-0 px-6 lg:px-44 py-4 lg:py-5">
            <span className="text-xs lg:text-base">
                © copyright {date} coded by VADYMTHEBESTDEV
            </span>
            <span className="text-xs lg:text-base">
                designed by ART・BY・THE・DARK
            </span>
        </footer>
    )
}
