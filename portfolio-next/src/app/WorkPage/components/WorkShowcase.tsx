'use client'

import { ReactNode, useRef } from 'react'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Text } from '@/components/Text/Text'
import { useActiveSlide } from '../hooks/useActiveSlide'
import { WorkCarousel } from './WorkCarousel'
import { WorkCarouselControls } from './WorkCarouselControls'

type ShowcaseProject = {
    title: string
    slide: ReactNode
}

type WorkShowcaseProps = {
    projects: ShowcaseProject[]
}

export const WorkShowcase = ({ projects }: WorkShowcaseProps) => {
    const trackRef = useRef<HTMLDivElement>(null)
    const { activeIndex, scrollToSlide } = useActiveSlide(trackRef)

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
        </>
    )
}
