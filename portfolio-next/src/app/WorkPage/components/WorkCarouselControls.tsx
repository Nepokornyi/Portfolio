type WorkCarouselControlsProps = {
    activeIndex: number
    slideCount: number
    onSelect: (index: number) => void
}

const formatSlideNumber = (slideNumber: number) =>
    String(slideNumber).padStart(2, '0')

const arrowClassName =
    'px-2 py-2.5 lg:py-3 transition-opacity duration-300 hover:opacity-70 aria-disabled:opacity-30 aria-disabled:cursor-default'

export const WorkCarouselControls = ({
    activeIndex,
    slideCount,
    onSelect,
}: WorkCarouselControlsProps) => {
    const isFirstSlide = activeIndex === 0
    const isLastSlide = activeIndex === slideCount - 1

    return (
        <div
            role="group"
            aria-label="Project navigation"
            className="flex shrink-0 items-center mr-4 lg:mr-10 font-bold text-lg lg:text-2xl text-primary-dark-blue"
        >
            <button
                type="button"
                aria-label="Previous project"
                aria-disabled={isFirstSlide}
                onClick={() => !isFirstSlide && onSelect(activeIndex - 1)}
                className={arrowClassName}
            >
                {'<'}
            </button>
            <span className="text-sm lg:text-lg tabular-nums whitespace-nowrap">
                {formatSlideNumber(activeIndex + 1)} /{' '}
                {formatSlideNumber(slideCount)}
            </span>
            <button
                type="button"
                aria-label="Next project"
                aria-disabled={isLastSlide}
                onClick={() => !isLastSlide && onSelect(activeIndex + 1)}
                className={arrowClassName}
            >
                {'>'}
            </button>
        </div>
    )
}
