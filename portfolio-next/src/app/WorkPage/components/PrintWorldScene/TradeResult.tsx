import { PanelLabel } from './PanelLabel'
import { ClosedTrade } from './types'

type TradeResultProps = {
    closedTrade: ClosedTrade
}

export const TradeResult = ({ closedTrade }: TradeResultProps) => (
    <div className="flex flex-1 flex-col motion-safe:animate-fade-in-up">
        <div className="flex items-baseline justify-between gap-[0.6em]">
            <PanelLabel>Closed</PanelLabel>
            <span className="truncate text-[0.7em] text-white/40">
                sold {closedTrade.sold} {closedTrade.token.ticker}
            </span>
        </div>

        <div
            className={`mt-auto flex flex-wrap items-baseline gap-x-[0.6em] leading-none tabular-nums ${
                closedTrade.isProfit
                    ? 'text-primary-light-green'
                    : 'text-secondary-red'
            }`}
        >
            <span className="text-[1.7em] font-bold">{closedTrade.profit}</span>
            <span className="text-[0.8em]">{closedTrade.change}</span>
        </div>

        <div className="mt-[0.5em] flex items-center gap-[0.5em] text-[0.8em] tabular-nums text-white/40">
            <span>{closedTrade.cost}</span>
            <span aria-hidden>→</span>
            <span className="text-white">{closedTrade.proceeds}</span>
        </div>
    </div>
)
