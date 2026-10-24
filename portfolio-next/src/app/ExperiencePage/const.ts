import { TechCloudLayout } from './types'

export const techCloudDesktop: TechCloudLayout = {
    width: 720,
    height: 1072,
    drift: 40,
    rows: [
        [
            { text: '<', x: 20, y: 0, size: 129 },
            { text: 'Bootstrap', x: 132, y: 19, size: 108 },
        ],
        [
            { text: '&', x: 56, y: 159, size: 128 },
            { text: 'Angular', x: 165, y: 158, size: 126 },
        ],
        [
            { text: 'html', x: 75, y: 324, size: 109 },
            { text: '#', x: 371, y: 314, size: 128 },
            { text: 'css', x: 504, y: 336, size: 75 },
        ],
        [
            { text: 'Java', x: 7, y: 446, size: 112 },
            { text: 'React', x: 305, y: 437, size: 126 },
        ],
        [
            { text: 'UX / UI', x: -84, y: 618, size: 65 },
            { text: '/', x: 172, y: 575, size: 130 },
            { text: 'Postman', x: 264, y: 602, size: 90 },
        ],
        [{ text: 'TypeScript', x: 6, y: 726, size: 108 }],
        [
            { text: 'AI', x: 4, y: 879, size: 109 },
            { text: '+', x: 158, y: 860, size: 129 },
            { text: 'Git', x: 274, y: 866, size: 135 },
            { text: 'hub', x: 494, y: 910, size: 64 },
        ],
    ],
}

export const techCloudMobile: TechCloudLayout = {
    width: 390,
    height: 488,
    drift: 8,
    rows: [
        [
            { text: '<', x: 42, y: 0, size: 70 },
            { text: 'Bootstrap', x: 103, y: 8, size: 61 },
        ],
        [
            { text: '+', x: -24, y: 62, size: 72 },
            { text: 'Figma', x: 50, y: 86, size: 43 },
            { text: 'Angular', x: 199, y: 89, size: 70 },
        ],
        [
            { text: 'css', x: 22, y: 150, size: 41 },
            { text: '&', x: 112, y: 137, size: 72 },
            { text: 'html', x: 185, y: 179, size: 60 },
            { text: '#', x: 342, y: 175, size: 71 },
        ],
        [{ text: 'UX / UI', x: 21, y: 220, size: 35 }],
        [
            { text: 'Git', x: -28, y: 273, size: 72 },
            { text: '/', x: 90, y: 268, size: 70 },
            { text: 'Java', x: 134, y: 248, size: 62 },
            { text: 'React', x: 301, y: 243, size: 72 },
        ],
        [
            { text: 'hub', x: 29, y: 361, size: 35 },
            { text: 'AI', x: 117, y: 318, size: 81 },
            { text: 'Postman', x: 228, y: 335, size: 52 },
        ],
        [
            { text: '@', x: 21, y: 415, size: 61 },
            { text: 'TypeScript', x: 100, y: 403, size: 61 },
        ],
    ],
}
