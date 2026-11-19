import { formatCrowns } from '@/app/WorkPage/lib/format'
import { ModelOption } from './types'

type ModelOptionsProps = {
    options: ModelOption[]
    className?: string
    optionClassName: string
}

export const ModelOptions = ({
    options,
    className = '',
    optionClassName,
}: ModelOptionsProps) => (
    <div className={`flex shrink-0 ${className}`}>
        {options.map(({ name, price, cursorTarget, isSelected, isPressed }) => (
            <div
                key={name}
                data-cursor-target={cursorTarget}
                className={`flex min-w-0 gap-[0.15em] border transition duration-150 ${optionClassName} ${
                    isSelected
                        ? 'border-primary-stroke bg-white/5 text-white'
                        : 'border-primary-hairline text-white/60'
                } ${isPressed ? 'translate-y-[0.15em] opacity-60' : ''}`}
            >
                <span className="text-[0.9em] font-bold leading-tight">
                    {name}
                </span>
                <span className="truncate text-[0.7em] text-white/40">
                    from {formatCrowns(price)}
                </span>
            </div>
        ))}
    </div>
)
