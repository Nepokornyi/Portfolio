import { Rectangle } from '@/components/Rectangle/Rectangle'
import { Source } from './types'

type SourceLabelProps = {
    source: Source
    // The text size and color
    className?: string
}

// The mark in the color of a source, and its name. The name always shows, so color is not the only sign.
export const SourceLabel = ({ source, className = '' }: SourceLabelProps) => (
    <span
        className={`flex shrink-0 items-center gap-[0.5em] whitespace-nowrap ${className}`}
    >
        <Rectangle
            variant="small"
            className={`size-[0.55em] shrink-0 ${source.color}`}
        />
        {source.name}
    </span>
)
