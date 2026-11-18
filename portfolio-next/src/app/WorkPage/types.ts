import { ComponentType } from 'react'
import { StaticImageData } from 'next/image'

export type WorkProject = {
    title: string
    image: StaticImageData
    imageAlt: string
    description: string
    technologies: string[]
    apps: string[]
    role: string
    about: string
    responsibilities: string[]
    Scene?: ComponentType
}
