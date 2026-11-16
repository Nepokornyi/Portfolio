import { SOURCES } from './const'
import { RangePicker } from './RangePicker'
import { SourceLabel } from './SourceLabel'
import { RangePickerState } from './types'

type DashboardHeaderProps = {
    picker: RangePickerState
    showSources: boolean
}

export const DashboardHeader = ({
    picker,
    showSources,
}: DashboardHeaderProps) => (
    <div className="relative z-10 flex shrink-0 items-center gap-[1.2em]">
        <span className="whitespace-nowrap text-[1.05em] font-bold text-white">
            Developer metrics
        </span>
        {showSources && (
            <div className="flex items-center gap-[1em] text-[0.7em] text-white/60">
                <span className="text-white/40">Sources</span>
                {Object.values(SOURCES).map((source) => (
                    <SourceLabel key={source.name} source={source} />
                ))}
            </div>
        )}
        <RangePicker picker={picker} className="ml-auto" />
    </div>
)
