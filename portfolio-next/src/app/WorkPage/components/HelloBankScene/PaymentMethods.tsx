import { PaymentMethodOption } from './types'

type PaymentMethodsProps = {
    options: PaymentMethodOption[]
    showNotes: boolean
    className?: string
}

export const PaymentMethods = ({
    options,
    showNotes,
    className = '',
}: PaymentMethodsProps) => (
    <div className={`flex shrink-0 flex-col gap-[0.5em] ${className}`}>
        {options.map(({ label, note, cursorTarget, isSelected, isPressed }) => (
            <div
                key={label}
                className={`flex items-center gap-[0.8em] border px-[0.9em] py-[0.5em] transition duration-150 ${
                    isSelected
                        ? 'border-primary-stroke bg-white/5'
                        : 'border-primary-hairline'
                } ${isPressed ? 'translate-y-[0.15em] opacity-60' : ''}`}
            >
                <span
                    data-cursor-target={cursorTarget}
                    className={`flex size-[1em] shrink-0 items-center justify-center rounded-full border transition-colors duration-150 ${
                        isSelected ? 'border-primary-stroke' : 'border-white/40'
                    }`}
                >
                    {isSelected && (
                        <span className="size-[0.5em] rounded-full bg-primary-stroke" />
                    )}
                </span>
                <div className="flex min-w-0 flex-col">
                    <span
                        className={`truncate text-[0.9em] font-bold leading-tight ${
                            isSelected ? 'text-white' : 'text-white/60'
                        }`}
                    >
                        {label}
                    </span>
                    {showNotes && (
                        <span className="truncate text-[0.7em] text-white/40">
                            {note}
                        </span>
                    )}
                </div>
            </div>
        ))}
    </div>
)
