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
        extend: {},
    },
    plugins: [rotateX],
}
