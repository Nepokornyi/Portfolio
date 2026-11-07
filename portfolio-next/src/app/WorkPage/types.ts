import { StaticImageData } from 'next/image'

export type WorkProject = {
    title: string
    image: StaticImageData
    imageAlt: string
    description: string
    technologies: string[]
    apps: string[]
}
