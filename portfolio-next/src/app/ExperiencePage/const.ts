import { ExperienceItem, TechCloudLayout } from './types'

export const experienceData: ExperienceItem[] = [
    {
        date: 'Jan 2026 - present',
        position: 'Independent Developer',
        company: '{ Independent }',
        clients: ['AI projects', 'openape.app'],
        bgColor: 'bg-primary-light-green',
        fontColor: 'text-primary-light-green',
    },
    {
        date: 'May 2025 - Dec 2025',
        position: 'Full-Stack Developer',
        company: '{ CodeCraftsmen }',
        clients: ['Telegram bot', 'White-label app', 'print.world'],
        bgColor: 'bg-primary-green',
        fontColor: 'text-primary-green',
    },
    {
        date: 'Oct 2023 - Apr 2025',
        position: 'Software Engineer',
        company: '{ Meonzi }',
        clients: ['Partners Bank', 'Škoda Auto', 'Kooperativa'],
        bgColor: 'bg-primary-dark-blue',
        fontColor: 'text-primary-dark-blue',
    },
    {
        date: 'Jun 2022 - Oct 2023',
        position: 'Front-End Developer',
        company: '{ Altersis }',
        clients: ['Hello Bank', 'Škoda Auto'],
        bgColor: 'bg-primary-blue',
        fontColor: 'text-primary-blue',
    },
]

export const techCloudDesktop: TechCloudLayout = {
    width: 720,
    height: 1072,
    drift: 40,
    rows: [
        [
            { text: '<', x: 20, y: 3, size: 129 },
            { text: 'Next.js', x: 132, y: 5, size: 126 },
        ],
        [
            { text: '&', x: 56, y: 157, size: 128 },
            { text: 'NestJS', x: 165, y: 158, size: 126 },
        ],
        [
            { text: 'Tailwind', x: 30, y: 334, size: 92 },
            { text: '#', x: 457, y: 313, size: 128 },
            { text: 'css', x: 572, y: 348, size: 60 },
        ],
        [
            { text: 'React', x: 7, y: 428, size: 140 },
            { text: 'native', x: 435, y: 464, size: 70 },
        ],
        [
            { text: 'Web', x: 7, y: 598, size: 95 },
            { text: '/', x: 254, y: 576, size: 130 },
            { text: 'Mobile', x: 338, y: 598, size: 95 },
        ],
        [{ text: 'TypeScript', x: 6, y: 726, size: 108 }],
        [
            { text: 'AI', x: 4, y: 879, size: 109 },
            { text: '+', x: 158, y: 867, size: 129 },
            { text: 'Agents', x: 275, y: 878, size: 110 },
        ],
    ],
}

export const techCloudMobile: TechCloudLayout = {
    width: 390,
    height: 488,
    drift: 8,
    rows: [
        [
            { text: '<', x: 14, y: 2, size: 70 },
            { text: 'Next.js', x: 77, y: 2, size: 70 },
        ],
        [
            { text: '&', x: 40, y: 69, size: 70 },
            { text: 'NestJS', x: 103, y: 69, size: 70 },
        ],
        [
            { text: 'Tailwind', x: 8, y: 144, size: 54 },
            { text: '#', x: 251, y: 137, size: 66 },
            { text: 'css', x: 306, y: 152, size: 36 },
        ],
        [
            { text: 'React', x: 30, y: 200, size: 72 },
            { text: 'native', x: 251, y: 217, size: 38 },
        ],
        [
            { text: 'Web', x: 8, y: 280, size: 52 },
            { text: '/', x: 141, y: 269, size: 70 },
            { text: 'Mobile', x: 184, y: 280, size: 52 },
        ],
        [{ text: 'TypeScript', x: 20, y: 340, size: 61 }],
        [
            { text: 'AI', x: 8, y: 400, size: 72 },
            { text: '+', x: 100, y: 402, size: 70 },
            { text: 'Agents', x: 163, y: 409, size: 58 },
        ],
    ],
}
