import { Rectangle } from '@/components/Rectangle/Rectangle'
import { CandleChart } from '@/app/WorkPage/components/PrintWorldScene/CandleChart'
import {
    formatChange,
    formatMarketCap,
} from '@/app/WorkPage/components/PrintWorldScene/lib/format'
import { PanelLabel } from '@/app/WorkPage/components/PrintWorldScene/PanelLabel'
import { PanelPlaceholder } from '@/app/WorkPage/components/PrintWorldScene/PanelPlaceholder'
import { TerminalPanel } from '@/app/WorkPage/components/PrintWorldScene/TerminalPanel'
import { ChartState } from '@/app/WorkPage/components/PrintWorldScene/types'

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
        title={
            chart ? (
                <ChartTitle chart={chart} />
            ) : (
                <PanelLabel>Chart</PanelLabel>
            )
        }
        aside={chart && <ChartPrice chart={chart} />}
        className={className}
    >
        {chart ? (
            <CandleChart
                candles={chart.candles}
                entry={chart.entry}
                exit={chart.exit}
                className="m-[0.8em] min-h-0 flex-1 motion-safe:animate-fade-in-up"
            />
        ) : (
            <PanelPlaceholder message="Select a token to see its chart" />
        )}
    </TerminalPanel>
)
