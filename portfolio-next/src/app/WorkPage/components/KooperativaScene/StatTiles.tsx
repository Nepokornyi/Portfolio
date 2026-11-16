import { SOURCES } from './const'
import { SourceLabel } from './SourceLabel'
import { StatTileState } from './types'

type StatTilesProps = {
    stats: StatTileState[]
    showDetail: boolean
    className?: string
}

export const StatTiles = ({
    stats,
    showDetail,
    className = '',
}: StatTilesProps) => (
    <div className={`grid shrink-0 ${className}`}>
        {stats.map(({ id, label, detail, source, value }) => (
            <div
                key={id}
                className="flex min-w-0 flex-col border border-primary-hairline px-[0.7em] py-[0.5em]"
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
                {showDetail && (
                    <span className="truncate text-[0.7em] text-white/40">
                        {detail}
                    </span>
                )}
            </div>
        ))}
    </div>
)
