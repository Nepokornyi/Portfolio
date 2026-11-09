import { Rectangle } from '@/components/Rectangle/Rectangle'
import { SceneWindow } from './SceneWindow'
import { ClosedTrade } from './types'

type PnlWindowProps = {
    closedTrade: ClosedTrade
    className?: string
}

export const PnlWindow = ({ closedTrade, className = '' }: PnlWindowProps) => (
    <SceneWindow title="pnl" className={className}>
        <div className="flex h-full flex-col justify-between p-[1em]">
            <div className="flex items-center gap-[0.7em] text-[0.8em]">
                <Rectangle
                    variant="small"
                    className={`size-[0.6em] shrink-0 ${closedTrade.token.color}`}
                />
                <span className="font-bold text-white">
                    {closedTrade.token.ticker}
                </span>
                <span className="ml-auto text-white/40">
                    sold {closedTrade.sold}
                </span>
            </div>

            <div
                className={`flex flex-wrap items-baseline gap-x-[0.6em] leading-none ${
                    closedTrade.isProfit
                        ? 'text-primary-light-green'
                        : 'text-secondary-red'
                }`}
            >
                <span className="text-[1.9em] font-bold">
                    {closedTrade.profit}
                </span>
                <span>{closedTrade.change}</span>
            </div>

            <div className="flex items-center gap-[0.5em] text-[0.8em] text-white/40">
                <span>{closedTrade.cost}</span>
                <span aria-hidden>→</span>
                <span className="text-white">{closedTrade.proceeds}</span>
            </div>
        </div>
    </SceneWindow>
)
