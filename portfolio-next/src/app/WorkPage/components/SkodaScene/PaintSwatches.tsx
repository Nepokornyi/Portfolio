import { Rectangle } from '@/components/Rectangle/Rectangle'
import { formatSurcharge } from './lib/format'
import { Paint, PaintOption } from './types'

type PaintSwatchesProps = {
    options: PaintOption[]
    selectedPaint: Paint
    className?: string
}

export const PaintSwatches = ({
    options,
    selectedPaint,
    className = '',
}: PaintSwatchesProps) => (
    <div className={`flex shrink-0 flex-col gap-[0.5em] ${className}`}>
        <div className="flex gap-[0.8em]">
            {options.map(({ name, swatchColor, isSelected, isPressed }) => (
                <div
                    key={name}
                    className={`flex size-[2.4em] items-center justify-center border transition duration-150 ${
                        isSelected
                            ? 'border-primary-stroke bg-white/5'
                            : 'border-primary-hairline'
                    } ${isPressed ? 'translate-y-[0.15em] opacity-60' : ''}`}
                >
                    <Rectangle
                        variant="small"
                        className={`size-[1.1em] ${swatchColor}`}
                    />
                </div>
            ))}
        </div>

        <div className="flex h-[1.4em] items-center justify-between gap-[0.6em]">
            <span className="text-[0.8em] text-white">
                {selectedPaint.name}
            </span>
            <span className="text-[0.8em] text-white/60">
                {formatSurcharge(selectedPaint.surcharge)}
            </span>
        </div>
    </div>
)
