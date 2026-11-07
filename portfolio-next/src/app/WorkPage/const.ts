import printWorldImage from '@/assets/static/work/printworld-logo.svg'
import partnersBankImage from '@/assets/static/work/partnersbank-logo.svg'
import skodaImage from '@/assets/static/work/skoda-logo.svg'
import kooperativaImage from '@/assets/static/work/kooperativa-logo.svg'
import helloBankImage from '@/assets/static/work/hellobank-logo.svg'
import { WorkProject } from './types'

export const workProjects: WorkProject[] = [
    {
        title: 'print.world',
        image: printWorldImage,
        imageAlt: 'print.world logo',
        description:
            'A trading platform for tokens and NFT collections on Solana and BNB Chain. I worked on the web app on both the front end and the back end.',
        technologies: ['Next.js', 'TypeScript', 'NestJS'],
        apps: ['Figma', 'VSCode', 'GitHub'],
    },
    {
        title: 'Partners Banka',
        image: partnersBankImage,
        imageAlt: 'Partners Banka logo',
        description:
            'A banking app that shows accounts, savings, investments and insurance in one place. I built app features as part of the Meonzi team.',
        technologies: ['React Native', 'TypeScript'],
        apps: ['Figma', 'Jira', 'VSCode', 'GitLab'],
    },
    {
        title: 'Škoda Auto',
        image: skodaImage,
        imageAlt: 'Škoda logo',
        description:
            'The public website of Škoda Auto. I built front-end components and pages for the model and service sections.',
        technologies: ['React', 'TypeScript'],
        apps: ['Figma', 'Jira', 'VSCode', 'GitLab'],
    },
    {
        title: 'Kooperativa',
        image: kooperativaImage,
        imageAlt: 'Kooperativa logo',
        description:
            'The website of a large Czech insurance company. I built pages and components for insurance products and online forms.',
        technologies: ['React', 'TypeScript'],
        apps: ['Figma', 'Jira', 'VSCode', 'GitLab'],
    },
    {
        title: 'Hello Bank',
        image: helloBankImage,
        imageAlt: 'Hello bank! logo',
        description:
            'As part of a dynamic team, I played a pivotal role in the development of a transformable e-commerce solution for HelloBank.',
        technologies: ['React', 'Typescript'],
        apps: ['Figma', 'Postman', 'VSCode', 'GitLab'],
    },
]
