import { SceneButton } from '@/app/WorkPage/components/SceneButton'
import { formatCrowns } from './lib/format'

type TotalBarProps = {
    total: number
    isContinuePressed: boolean
    className?: string
}

export const TotalBar = ({
    total,
    isContinuePressed,
    className = '',
}: TotalBarProps) => (
    <div className={`flex shrink-0 flex-col ${className}`}>
        <div className="flex h-[2.6em] items-center justify-between gap-[0.6em] border-t border-primary-hairline">
            <span className="text-[0.8em] text-white/60">Total price</span>
            <span className="text-[1.4em] font-bold tabular-nums text-primary-light-green">
                {formatCrowns(total)}
            </span>
        </div>
        <SceneButton isPressed={isContinuePressed} className="mt-[0.6em]">
            Continue
        </SceneButton>
    </div>
)
