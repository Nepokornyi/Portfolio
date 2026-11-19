import { ALWAYS_SHOWN_STAT_IDS, SOURCES } from './const'
import { SourceLabel } from './SourceLabel'
import { StatTileState } from './types'

type StatTilesProps = {
    stats: StatTileState[]
    detailClassName: string
    extraTileClassName: string
    className?: string
}

export const StatTiles = ({
    stats,
    detailClassName,
    extraTileClassName,
    className = '',
}: StatTilesProps) => (
    <div className={`grid shrink-0 ${className}`}>
        {stats.map(({ id, label, detail, source, value }) => (
            <div
                key={id}
                className={`flex min-w-0 flex-col border border-primary-hairline px-[0.7em] py-[0.5em] ${
                    ALWAYS_SHOWN_STAT_IDS.includes(id) ? '' : extraTileClassName
                }`}
            >
                <div className="flex items-center justify-between gap-[0.5em]">
                    <span className="truncate text-[0.75em] text-white/60">
                        {label}
                    </span>
                    <SourceLabel
                        source={SOURCES[source]}
                        className="text-[0.7em] text-white/40"
                    />
                </div>
                <span className="mt-[0.15em] h-[1.3em] whitespace-nowrap text-[1.4em] font-bold leading-[1.3] tabular-nums text-white">
                    {value}
                </span>
                <span
                    className={`truncate text-[0.7em] text-white/40 ${detailClassName}`}
                >
                    {detail}
                </span>
            </div>
        ))}
    </div>
)
