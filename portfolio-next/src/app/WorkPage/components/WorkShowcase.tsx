'use client'

import { ReactNode, useRef, useState } from 'react'
import { Button } from '@/components/Button/Button'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { useActiveSlide } from '../hooks/useActiveSlide'
import { WorkCarousel } from './WorkCarousel'
import { WorkCarouselControls } from './WorkCarouselControls'
import { WorkDialog } from './WorkDialog'

type ShowcaseProject = {
    title: string
    slide: ReactNode
    details: ReactNode
}

type WorkShowcaseProps = {
    projects: ShowcaseProject[]
}

export const WorkShowcase = ({ projects }: WorkShowcaseProps) => {
    const trackRef = useRef<HTMLDivElement>(null)
    const { activeIndex, scrollToSlide } = useActiveSlide(trackRef)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const activeProject = projects[activeIndex]

    return (
        <>
            <FlexContainer className="h-full items-center justify-between border-b lg:border-l">
                <Text className="text-lg lg:text-4xl lg:mr-0 my-6 lg:my-8 font-bold text-primary-dark-blue">
                    Featured Projects
                </Text>
                <WorkCarouselControls
                    activeIndex={activeIndex}
                    slideCount={projects.length}
                    onSelect={scrollToSlide}
                />
            </FlexContainer>

            <WorkCarousel
                slides={projects.map(({ title, slide }) => ({
                    label: title,
                    content: slide,
                }))}
                trackRef={trackRef}
                activeIndex={activeIndex}
                onSelect={scrollToSlide}
            />

            <FlexContainer className="lg:col-span-2 justify-center my-12 lg:my-20">
                <FlexContainer width="w-fit" className="relative ">
                    <Button
                        type="button"
                        aria-haspopup="dialog"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        see more
                    </Button>
                </FlexContainer>
            </FlexContainer>

            <WorkDialog
                title={activeProject.title}
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            >
                {activeProject.details}
            </WorkDialog>
        </>
    )
}
