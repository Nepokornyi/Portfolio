import { SceneCheckIcon } from '@/app/WorkPage/components/SceneCheckIcon'
import { ApprovalState } from './types'

type ApprovalStepProps = {
    approval: ApprovalState
}

export const ApprovalStep = ({ approval }: ApprovalStepProps) => {
    if (approval.phase === 'review')
        return (
            <span className="text-[0.9em]">
                Your application is complete. Send it to the bank for a
                decision.
            </span>
        )

    if (approval.phase === 'checking')
        return (
            <div
                key="checking"
                className="flex flex-col gap-[0.8em] motion-safe:animate-fade-in-up"
            >
                <span className="text-[0.9em]">We check your application…</span>
                <div className="h-[0.4em] bg-primary-input-background">
                    <div
                        className="h-full bg-primary-stroke motion-safe:transition-[width] motion-safe:duration-100 motion-safe:ease-linear"
                        style={{ width: `${approval.checkProgress * 100}%` }}
                    />
                </div>
            </div>
        )

    return (
        <div
            key="approved"
            className="flex h-full flex-col items-center justify-center gap-[1.4em] text-center motion-safe:animate-fade-in-up"
        >
            <span className="flex size-[3.4em] rotate-45 items-center justify-center border border-primary-light-green text-primary-light-green shadow-[0_0_1.6em_var(--color-primary-light-green)]">
                <SceneCheckIcon className="size-[2em] -rotate-45" />
            </span>
            <div className="flex flex-col gap-[0.3em]">
                <span className="text-[1.4em] font-bold leading-tight text-white">
                    Your mortgage is approved
                </span>
                <span className="text-[0.9em] text-white/60">
                    {approval.offer}
                </span>
            </div>
        </div>
    )
}
