import { SceneCheckIcon } from '@/app/WorkPage/components/SceneCheckIcon'
import { formatCrowns } from '@/app/WorkPage/lib/format'
import { InstalmentPlan } from './types'

type ApprovalResultProps = {
    plan: InstalmentPlan
}

export const ApprovalResult = ({ plan }: ApprovalResultProps) => (
    <div className="mt-[0.8em] flex flex-1 flex-col motion-safe:animate-fade-in-up">
        <div className="flex shrink-0 items-center gap-[0.8em]">
            <span className="flex size-[2.4em] shrink-0 items-center justify-center rounded-full border border-primary-light-green text-primary-light-green shadow-[0_0_1.2em_var(--color-primary-light-green)]">
                <SceneCheckIcon className="size-[1.4em]" />
            </span>
            <span className="text-[1.4em] font-bold leading-snug text-white">
                Approved
            </span>
        </div>

        <div className="mt-auto flex shrink-0 flex-col pb-[0.8em] pt-[1.1em]">
            <span className="text-[0.8em] text-white/60">Your plan</span>
            <span className="text-[2.2em] font-bold leading-tight tabular-nums text-primary-light-green">
                {plan.months} × {formatCrowns(plan.monthlyPayment)}
            </span>
            <div className="mt-[0.8em] flex items-baseline justify-between gap-[0.6em] border-t border-primary-hairline pt-[0.7em] text-[0.8em]">
                <span className="text-white/40">Total to pay</span>
                <span className="tabular-nums text-white">
                    {formatCrowns(plan.total)}
                </span>
            </div>
        </div>

        <div className="mt-auto flex shrink-0 items-center gap-[0.6em] border border-primary-light-green px-[0.9em] py-[0.6em] text-primary-light-green">
            <SceneCheckIcon className="size-[1.1em] shrink-0" />
            <span className="text-[0.8em] font-bold">
                Your order is confirmed
            </span>
        </div>
    </div>
)
