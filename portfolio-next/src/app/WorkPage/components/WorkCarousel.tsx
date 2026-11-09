import { ReactNode, RefObject } from 'react'
import { Glow } from '@/components/Glow/Glow'

type CarouselSlide = {
    label: string
    content: ReactNode
}

type WorkCarouselProps = {
    slides: CarouselSlide[]
    trackRef: RefObject<HTMLDivElement | null>
    activeIndex: number
    onSelect: (index: number) => void
}

export const WorkCarousel = ({
    slides,
    trackRef,
    activeIndex,
    onSelect,
}: WorkCarouselProps) => {
    return (
        <div className="relative lg:col-span-2 h-full">
            <Glow
                color="rgba(5, 106, 225, 0.55)"
                blur="blur-[120px]"
                className="-inset-8 lg:right-1/2"
            />

            <div
                ref={trackRef}
                role="region"
                aria-roledescription="carousel"
                aria-label="Projects"
                tabIndex={0}
                className="flex overflow-x-auto snap-x snap-mandatory overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {slides.map(({ label, content }, index) => (
                    <div
                        key={label}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${index + 1} of ${slides.length}: ${label}`}
                        className="w-full shrink-0 snap-start"
                    >
                        {content}
                    </div>
                ))}
            </div>

            <div className="absolute left-0 top-full -translate-x-1/2 mt-2.5 lg:mt-5 flex flex-col gap-0.5">
                {slides.map(({ label }, index) => {
                    const isActive = index === activeIndex
                    return (
                        <button
                            key={label}
                            type="button"
                            aria-label={`Show ${label}`}
                            aria-current={isActive}
                            onClick={() => onSelect(index)}
                            className="p-1.5 lg:p-2.5"
                        >
                            <span
                                className={`block size-1.5 lg:size-2.5 rotate-45 border border-primary-dark-blue transition-colors duration-300 ${
                                    isActive
                                        ? 'bg-primary-dark-blue'
                                        : 'bg-primary-background'
                                }`}
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
