import { Rectangle } from '@/components/Rectangle/Rectangle'
import { SummaryRow } from './types'

type SummaryPanelProps = {
    rows: SummaryRow[]
    isApproved: boolean
    rowClassName: string
    className?: string
}

export const SummaryPanel = ({
    rows,
    isApproved,
    rowClassName,
    className = '',
}: SummaryPanelProps) => (
    <div
        className={`flex flex-col border-primary-hairline bg-white/[0.03] py-[1.4em] ${className}`}
    >
        <span className="font-bold text-white">Your mortgage</span>

        <div className="mt-[0.8em] flex flex-1 flex-col text-[0.8em]">
            {rows.map(({ label, value }) => (
                <div
                    key={label}
                    className={`flex items-baseline justify-between gap-[0.6em] border-b border-primary-hairline py-[0.6em] ${rowClassName}`}
                >
                    <span className="text-white/40">{label}</span>
                    {value ? (
                        <span className="text-white motion-safe:animate-slide-in-flash">
                            {value}
                        </span>
                    ) : (
                        <span className="text-white/20">—</span>
                    )}
                </div>
            ))}
        </div>

        <div
            key={String(isApproved)}
            className={`mt-auto flex items-center gap-[0.7em] text-[0.9em] font-bold motion-safe:animate-fade-in-up ${
                isApproved ? 'text-primary-light-green' : 'text-white/60'
            }`}
        >
            <Rectangle
                variant="small"
                className={`size-[0.6em] shrink-0 ${
                    isApproved
                        ? 'bg-primary-light-green'
                        : 'bg-primary-highlight'
                }`}
            />
            {isApproved ? 'Approved' : 'In progress'}
        </div>
    </div>
)
