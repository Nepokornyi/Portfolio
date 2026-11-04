import type { Metadata } from 'next'

import './globals.css'
import { montserrat } from './fonts'

export const metadata: Metadata = {
    title: 'Vadym – Agentic Engineer',
    description:
        'Renaissance engineer: front-end, full-stack, and AI. I build complete products with AI agents, from interface to backend.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                {children}
                <div className="noise-overlay" />
            </body>
        </html>
    )
}
