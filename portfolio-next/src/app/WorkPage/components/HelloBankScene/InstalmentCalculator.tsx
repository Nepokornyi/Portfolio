import { SceneButton } from '@/app/WorkPage/components/SceneButton'
import { formatCrowns } from '@/app/WorkPage/lib/format'
import { YEARLY_RATE } from './const'
import { CalculatorState } from './types'

const CalculatorFact = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-baseline justify-between gap-[0.6em] py-[0.3em]">
        <span className="text-white/40">{label}</span>
        <span className="tabular-nums text-white">{value}</span>
    </div>
)

type InstalmentCalculatorProps = {
    calculator: CalculatorState
}

// The rows do not shrink, so a panel that is too short shows as an overflow, not as cut rows
export const InstalmentCalculator = ({
    calculator,
}: InstalmentCalculatorProps) => (
    <div className="mt-[0.8em] flex flex-1 flex-col motion-safe:animate-fade-in-up">
        <div className="flex shrink-0 gap-[0.5em]">
            {calculator.termOptions.map(({ months, isSelected, isPressed }) => (
                <div
                    key={months}
                    className={`flex h-[2.4em] flex-1 items-center justify-center border transition duration-150 ${
                        isSelected
                            ? 'border-primary-stroke bg-white/5 font-bold text-primary-stroke'
                            : 'border-primary-hairline text-white/60'
                    } ${isPressed ? 'translate-y-[0.15em] opacity-60' : ''}`}
                >
                    <span className="text-[0.8em]">{months} months</span>
                </div>
            ))}
        </div>

        {/* The two auto margins put the payment in the middle and the facts and the button at the bottom.
            The top paddings are the smallest gaps. */}
        <div className="mt-auto flex shrink-0 flex-col pt-[1em]">
            <span className="text-[0.8em] text-white/60">Monthly payment</span>
            {/* Tabular digits, so the amount does not jump while it counts */}
            <span className="text-[2.2em] font-bold leading-tight tabular-nums text-primary-light-green">
                {formatCrowns(calculator.monthlyPayment)}
            </span>
        </div>

        <div className="mt-auto flex shrink-0 flex-col pt-[0.8em]">
            <div className="flex flex-col border-t border-primary-hairline pt-[0.4em] text-[0.8em]">
                <CalculatorFact
                    label="Interest rate"
                    value={`${(YEARLY_RATE * 100).toFixed(1)} % a year`}
                />
                <CalculatorFact
                    label="Total to pay"
                    value={formatCrowns(calculator.total)}
                />
            </div>
            <SceneButton
                isPressed={calculator.isApplyPressed}
                className="mt-[0.6em]"
            >
                Apply
            </SceneButton>
        </div>
    </div>
)
