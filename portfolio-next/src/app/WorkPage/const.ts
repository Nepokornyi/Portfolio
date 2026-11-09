import printWorldImage from '@/assets/static/work/printworld-logo.svg'
import partnersBankImage from '@/assets/static/work/partnersbank-logo.svg'
import skodaImage from '@/assets/static/work/skoda-logo.svg'
import kooperativaImage from '@/assets/static/work/kooperativa-logo.svg'
import helloBankImage from '@/assets/static/work/hellobank-logo.svg'
import { PrintWorldScene } from './components/PrintWorldScene/PrintWorldScene'
import { WorkProject } from './types'

// TODO: role, about and responsibilities are drafts from the card text. Replace them with the real details.

export const workProjects: WorkProject[] = [
    {
        title: 'print.world',
        image: printWorldImage,
        imageAlt: 'print.world logo',
        description:
            'A trading platform for tokens and NFT collections on Solana and BNB Chain. I worked on the web app on both the front end and the back end.',
        technologies: ['Next.js', 'TypeScript', 'NestJS'],
        apps: ['Figma', 'VSCode', 'GitHub'],
        role: 'Full-stack developer',
        about: 'A trading terminal for tokens and NFT collections on Solana and BNB Chain. Users find new tokens in a live feed, follow the price on charts, and buy or sell from one screen. The layout is made of windows that users can move.',
        responsibilities: [
            'Built the trading terminal: the menu, the windows, the charts and the buy/sell panel.',
            'Worked on the back end with NestJS.',
        ],
        Scene: PrintWorldScene,
    },
    {
        title: 'Partners Banka',
        image: partnersBankImage,
        imageAlt: 'Partners Banka logo',
        description:
            'A banking app that shows accounts, savings, investments and insurance in one place. I built app features as part of the Meonzi team.',
        technologies: ['React Native', 'TypeScript'],
        apps: ['Figma', 'Jira', 'VSCode', 'GitLab'],
        role: 'Mobile developer',
        about: 'A banking app that shows accounts, savings, investments and insurance in one place.',
        responsibilities: ['Built app features as part of the Meonzi team.'],
    },
    {
        title: 'Škoda Auto',
        image: skodaImage,
        imageAlt: 'Škoda logo',
        description:
            'The public website of Škoda Auto. I built front-end components and pages for the model and service sections.',
        technologies: ['React', 'TypeScript'],
        apps: ['Figma', 'Jira', 'VSCode', 'GitLab'],
        role: 'Front-end developer',
        about: 'The public website of Škoda Auto.',
        responsibilities: [
            'Built front-end components and pages for the model and service sections.',
        ],
    },
    {
        title: 'Kooperativa',
        image: kooperativaImage,
        imageAlt: 'Kooperativa logo',
        description:
            'The website of a large Czech insurance company. I built pages and components for insurance products and online forms.',
        technologies: ['React', 'TypeScript'],
        apps: ['Figma', 'Jira', 'VSCode', 'GitLab'],
        role: 'Front-end developer',
        about: 'The website of a large Czech insurance company.',
        responsibilities: [
            'Built pages and components for insurance products and online forms.',
        ],
    },
    {
        title: 'Hello Bank',
        image: helloBankImage,
        imageAlt: 'Hello bank! logo',
        description:
            'As part of a dynamic team, I played a pivotal role in the development of a transformable e-commerce solution for HelloBank.',
        technologies: ['React', 'Typescript'],
        apps: ['Figma', 'Postman', 'VSCode', 'GitLab'],
        role: 'Front-end developer',
        about: 'A transformable e-commerce solution for HelloBank.',
        responsibilities: ['Worked on the front end as part of the team.'],
    },
]
