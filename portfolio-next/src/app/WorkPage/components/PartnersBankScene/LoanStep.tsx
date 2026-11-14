import { LOAN } from './const'
import { formatCrowns } from './lib/format'
import { LoanState } from './types'

const LoanFact = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-1 items-baseline justify-between border border-primary-hairline px-[0.8em] py-[0.5em] text-[0.8em]">
        <span className="text-white/40">{label}</span>
        <span className="text-white">{value}</span>
    </div>
)

type LoanStepProps = {
    loan: LoanState
}

export const LoanStep = ({ loan }: LoanStepProps) => {
    const sliderPercent = `${loan.sliderPosition * 100}%`

    return (
        <div className="flex flex-col gap-[1em]">
            <div className="flex flex-col">
                <span className="text-[0.8em] text-white/40">Loan amount</span>
                <span className="text-[2em] font-bold leading-tight text-white">
                    {formatCrowns(loan.amount)}
                </span>
            </div>

            <div className="flex flex-col gap-[0.3em]">
                {/* The fill and the thumb use the timing of the scene cursor, so the cursor and the thumb move together */}
                <div className="relative h-[1.4em]">
                    <span className="absolute inset-x-0 top-1/2 h-px bg-primary-hairline" />
                    <span
                        className="absolute left-0 top-1/2 h-px bg-primary-stroke motion-safe:transition-[width] motion-safe:duration-700 motion-safe:ease-in-out"
                        style={{ width: sliderPercent }}
                    />
                    <span
                        className="absolute top-1/2 motion-safe:transition-[left] motion-safe:duration-700 motion-safe:ease-in-out"
                        style={{ left: sliderPercent }}
                    >
                        <span
                            className={`block size-[0.9em] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-primary-stroke bg-primary-button transition-shadow duration-200 ${
                                loan.isDragging
                                    ? 'shadow-[0_0_0.8em_var(--color-primary-stroke)]'
                                    : ''
                            }`}
                        />
                    </span>
                </div>
                <div className="flex justify-between text-[0.7em] text-white/40">
                    <span>{formatCrowns(LOAN.sliderMin)}</span>
                    <span>{formatCrowns(LOAN.sliderMax)}</span>
                </div>
            </div>

            <div className="flex gap-[0.8em]">
                <LoanFact label="Term" value={`${LOAN.years} years`} />
                <LoanFact
                    label="Rate"
                    value={`${(LOAN.yearlyRate * 100).toFixed(2)} %`}
                />
            </div>

            <div className="flex items-baseline justify-between border-t border-primary-hairline pt-[0.9em]">
                <span className="text-[0.9em]">Monthly payment</span>
                <span className="text-[1.4em] font-bold text-primary-light-green">
                    {formatCrowns(loan.monthlyPayment)}
                </span>
            </div>
        </div>
    )
}
