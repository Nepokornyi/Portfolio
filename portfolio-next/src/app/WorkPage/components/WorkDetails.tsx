import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Glow } from '@/components/Glow/Glow'
import { Text } from '@/components/Text/Text'
import { WorkProject } from '../types'

const DetailsBlock = ({
    label,
    children,
}: {
    label: string
    children: ReactNode
}) => (
    <div className="flex flex-col">
        <Text className="text-sm md:text-base lg:text-[1.25em] lg:leading-[1.4] underline pb-1 lg:pb-[0.2em] text-white">
            {label}
        </Text>
        <div className="mx-6 lg:mx-12 leading-tight text-sm md:text-base lg:text-[1em] lg:leading-normal font-light">
            {children}
        </div>
    </div>
)

type WorkDetailsProps = {
    project: WorkProject
}

// The content of the "see more" dialog: the prototype scene on the left, the details on the right
export const WorkDetails = ({ project }: WorkDetailsProps) => {
    const { Scene } = project

    return (
        <div className="grid lg:h-full lg:grid-cols-[2fr_1fr]">
            {/* A size container on desktop, so a scene can fit its width to the cell height (cqh) */}
            <div className="relative isolate flex items-center justify-center border-b border-primary-hairline p-6 lg:border-b-0 lg:border-r lg:p-10 lg:[container-type:size]">
                <Glow
                    color="rgba(7, 117, 189, 0.4)"
                    blur="blur-[120px]"
                    className="inset-0"
                />
                {Scene ? (
                    <Scene />
                ) : (
                    <div className="flex aspect-[2/1] w-full items-center justify-center bg-primary-dark-blue">
                        <div className="relative h-2/5 w-1/2">
                            <Image
                                src={project.image}
                                alt={project.imageAlt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* On desktop, the column does not scroll. It is a size container, and the font size
                follows its width (cqw) and its height (cqh), so all the blocks fit on one screen.
                If longer text is cut off at the bottom, make the cqh value smaller. */}
            <div className="lg:[container-type:size]">
                <div className="flex flex-col gap-6 py-6 lg:gap-[1.5em] lg:py-[2em] lg:text-[length:min(1rem,3.95cqw,2.35cqh)]">
                    <DetailsBlock label="About:">{project.about}</DetailsBlock>
                    <DetailsBlock label="Role:">{project.role}</DetailsBlock>
                    <DetailsBlock label="Responsibilities:">
                        <ul className="list-disc space-y-1 pl-5 lg:space-y-[0.25em] lg:pl-[1.25em]">
                            {project.responsibilities.map((responsibility) => (
                                <li key={responsibility}>{responsibility}</li>
                            ))}
                        </ul>
                    </DetailsBlock>
                    <DetailsBlock label="Technologies:">
                        {project.technologies.join(', ')}
                    </DetailsBlock>
                    <DetailsBlock label="Apps:">
                        {project.apps.join(', ')}
                    </DetailsBlock>
                </div>
            </div>
        </div>
    )
}
