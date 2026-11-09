import { Rectangle } from '@/components/Rectangle/Rectangle'
import { CandleChart } from './CandleChart'
import { formatChange, formatMarketCap } from './lib/format'
import { SceneWindow } from './SceneWindow'
import { ChartState } from './types'

type ChartWindowProps = {
    chart: ChartState
    className?: string
}

export const ChartWindow = ({ chart, className = '' }: ChartWindowProps) => (
    <SceneWindow title={`${chart.token.ticker}/SOL`} className={className}>
        <div className="flex h-full flex-col p-[1em]">
            <div className="flex items-center gap-[0.7em]">
                <Rectangle
                    variant="small"
                    className={`size-[0.7em] shrink-0 ${chart.token.color}`}
                />
                <span className="font-bold text-white">
                    {chart.token.ticker}
                </span>
                <span className="text-[0.8em] text-white/40">
                    {chart.token.name}
                </span>
                <span className="ml-auto font-bold text-white">
                    {formatMarketCap(chart.marketCap)}
                </span>
                <span
                    className={`text-[0.8em] ${
                        chart.change >= 0
                            ? 'text-primary-light-green'
                            : 'text-secondary-red'
                    }`}
                >
                    {formatChange(chart.change)}
                </span>
            </div>
            <CandleChart
                candles={chart.candles}
                entry={chart.entry}
                exit={chart.exit}
                className="mt-[0.8em] min-h-0 flex-1"
            />
        </div>
    </SceneWindow>
)
