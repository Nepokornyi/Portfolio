import { RANGE_OPTIONS } from './const'
import { RangePickerState } from './types'

type RangePickerProps = {
    picker: RangePickerState
    className?: string
}

export const RangePicker = ({ picker, className = '' }: RangePickerProps) => (
    <div className={`relative w-[7.4em] shrink-0 ${className}`}>
        <div
            data-cursor-target="rangePicker"
            className={`flex h-[1.9em] items-center justify-between gap-[0.4em] border px-[0.6em] transition-colors duration-150 ${
                picker.isMenuOpen
                    ? 'border-primary-stroke'
                    : 'border-primary-hairline'
            } ${picker.isPressed ? 'bg-white/10' : 'bg-primary-input-background'}`}
        >
            <span className="whitespace-nowrap text-[0.8em] text-white">
                {picker.range}
            </span>
            <svg
                viewBox="0 0 12 12"
                aria-hidden
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`size-[0.6em] shrink-0 text-white/60 transition-transform duration-150 ${
                    picker.isMenuOpen ? 'rotate-180' : ''
                }`}
            >
                <path d="M2.5 4.5L6 8l3.5-3.5" />
            </svg>
        </div>

        {picker.isMenuOpen && (
            <div className="absolute inset-x-0 top-full mt-[0.3em] flex flex-col border border-primary-stroke bg-primary-background py-[0.3em] shadow-lg shadow-black/60 motion-safe:animate-fade-in-up">
                {RANGE_OPTIONS.map(({ label, cursorTarget }) => (
                    <span
                        key={label}
                        data-cursor-target={cursorTarget}
                        className={`flex h-[1.8em] items-center px-[0.6em] ${
                            label === picker.pressedOption ? 'bg-white/10' : ''
                        } ${
                            label === picker.range
                                ? 'text-white shadow-[inset_0.2em_0_0_var(--color-primary-stroke)]'
                                : 'text-white/60'
                        }`}
                    >
                        <span className="whitespace-nowrap text-[0.8em]">
                            {label}
                        </span>
                    </span>
                ))}
            </div>
        )}
    </div>
)
