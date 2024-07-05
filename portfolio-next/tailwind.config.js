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
                    highlight: '#FFC700',
                    button: '#FFD600',
                    'light-green': '#40C8A5',
                    green: '#40C8C8',
                    'dark-blue': '#039BB8',
                    blue: '#29A1F8',
                    stroke: '#A6EAFF',
                    background: '#000000',
                    text: '#FFFFFF',
                },
                secondary: {
                    discord: '#9E52FF',
                    github: '#B540C8',
                    linkedin: '#1867FF',
                    yellow: '#FFD600',
                    green: '#ADFF00',
                    red: '#FF3D29',
                },
            },
        },
    },
    plugins: [rotateX],
}
