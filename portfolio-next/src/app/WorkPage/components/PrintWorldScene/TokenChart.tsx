import { Rectangle } from '@/components/Rectangle/Rectangle'
import { CandleChart } from './CandleChart'
import { formatChange, formatMarketCap } from './lib/format'
import { PanelLabel } from './PanelLabel'
import { PanelPlaceholder } from './PanelPlaceholder'
import { TerminalPanel } from './TerminalPanel'
import { ChartState } from './types'

const ChartTitle = ({ chart }: { chart: ChartState }) => (
    <div className="flex min-w-0 items-baseline gap-[0.6em]">
        <Rectangle
            variant="small"
            className={`size-[0.6em] shrink-0 self-center ${chart.token.color}`}
        />
        <span className="font-bold text-white">{chart.token.ticker}</span>
        <span className="truncate text-[0.8em] text-white/40">
            {chart.token.name}
        </span>
    </div>
)

const ChartPrice = ({ chart }: { chart: ChartState }) => (
    <>
        <span className="font-bold tabular-nums text-white">
            {formatMarketCap(chart.marketCap)}
        </span>
        <span
            className={`text-[0.8em] tabular-nums ${
                chart.change >= 0
                    ? 'text-primary-light-green'
                    : 'text-secondary-red'
            }`}
        >
            {formatChange(chart.change)}
        </span>
    </>
)

type TokenChartProps = {
    chart: ChartState | null
    className?: string
}

export const TokenChart = ({ chart, className = '' }: TokenChartProps) => (
    <TerminalPanel
        title={chart ? <ChartTitle chart={chart} /> : <PanelLabel>Chart</PanelLabel>}
        aside={chart && <ChartPrice chart={chart} />}
        className={className}
    >
        {chart ? (
            <CandleChart
                key="chart"
                candles={chart.candles}
                entry={chart.entry}
                exit={chart.exit}
                className="m-[0.8em] min-h-0 flex-1 motion-safe:animate-fade-in-up"
            />
        ) : (
            <PanelPlaceholder key="empty" message="Select a token to see its chart" />
        )}
    </TerminalPanel>
)
