/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-x-90-translate-y-16': {
            transform: 'translateY(-4rem) rotateX(90deg)',
        },
        '.-rotate-x-90-translate-y-16': {
            transform: 'translateY(4rem) rotateX(-90deg)',
        },
    })
})

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: {
                    highlight: 'var(--color-primary-highlight)',
                    button: 'var(--color-primary-button)',
                    'light-green': 'var(--color-primary-light-green)',
                    green: 'var(--color-primary-green)',
                    'dark-blue': 'var(--color-primary-dark-blue)',
                    blue: 'var(--color-primary-blue)',
                    stroke: 'var(--color-primary-stroke)',
                    background: 'var(--color-primary-background)',
                    'input-background': 'var(--color-primary-input-background)',
                    text: 'var(--color-primary-text)',
                },
                secondary: {
                    discord: 'var(--color-secondary-discord)',
                    github: 'var(--color-secondary-github)',
                    linkedin: 'var(--color-secondary-linkedin)',
                    yellow: 'var(--color-secondary-yellow)',
                    green: 'var(--color-secondary-green)',
                    red: 'var(--color-secondary-red)',
                },
            },
            fontSize: {
                'about-clamp': 'clamp(1rem, 1.35vw, 3rem)',
            },
        },
    },
    plugins: [rotateX],
}
