import { DashboardPanel } from './DashboardPanel'
import { CHART_MAX_HOURS, STAGES } from './const'
import { formatDuration } from './lib/format'
import { TimeBucket } from './types'

const SCALE_HOURS = [1, 2, 3].map((step) => (CHART_MAX_HOURS / 3) * step)

const toPercent = (hours: number) => `${(hours / CHART_MAX_HOURS) * 100}%`

const StackedBar = ({ bar }: { bar: TimeBucket }) => (
    <div className="flex h-full w-[1.3em] flex-col-reverse">
        {STAGES.map((stage, index) => (
            <div
                key={stage.id}
                className="relative shrink-0 motion-safe:transition-[height] motion-safe:duration-100 motion-safe:ease-linear"
                style={{ height: toPercent(bar.hoursByStage[stage.id]) }}
            >
                <span
                    className={`absolute inset-x-0 top-0 ${
                        index === 0 ? 'bottom-0' : 'bottom-[0.14em]'
                    } ${stage.color}`}
                />
            </div>
        ))}
    </div>
)

type StageChartProps = {
    bars: TimeBucket[]
    className?: string
}

export const StageChart = ({ bars, className = '' }: StageChartProps) => (
    <DashboardPanel title="Lead time by stage" className={className}>
        <div className="mt-[0.6em] flex min-h-0 flex-1">
            <div className="relative w-[2.2em] shrink-0">
                {SCALE_HOURS.map((hours) => (
                    <span
                        key={hours}
                        className="absolute left-0 translate-y-1/2 text-[0.7em] leading-none tabular-nums text-white/40"
                        style={{ bottom: toPercent(hours) }}
                    >
                        {formatDuration(hours)}
                    </span>
                ))}
            </div>
            <div className="relative min-w-0 flex-1 border-b border-white/30">
                {SCALE_HOURS.map((hours) => (
                    <span
                        key={hours}
                        className="absolute inset-x-0 h-px bg-primary-hairline"
                        style={{ bottom: toPercent(hours) }}
                    />
                ))}
                <div className="absolute inset-0 flex">
                    {bars.map((bar) => (
                        <div
                            key={bar.label}
                            className="flex flex-1 items-end justify-center"
                        >
                            <StackedBar bar={bar} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="ml-[2.2em] flex">
            {bars.map((bar) => (
                <span
                    key={bar.label}
                    className="flex-1 pt-[0.35em] text-center text-[0.7em] leading-none text-white/40"
                >
                    {bar.label}
                </span>
            ))}
        </div>

        <div className="mt-[0.6em] flex flex-wrap gap-x-[1em] gap-y-[0.3em]">
            {STAGES.map((stage) => (
                <span
                    key={stage.id}
                    className="flex items-center gap-[0.45em] whitespace-nowrap text-[0.7em] text-white/60"
                >
                    <span className={`size-[0.75em] shrink-0 ${stage.color}`} />
                    {stage.label}
                </span>
            ))}
        </div>
    </DashboardPanel>
)
