import { PanelLabel } from './PanelLabel'
import { TradeState } from './types'

type OpenPositionProps = {
    position: TradeState['position']
}

export const OpenPosition = ({ position }: OpenPositionProps) => (
    <div className="flex flex-1 flex-col">
        <PanelLabel>Position</PanelLabel>
        {position ? (
            <div
                key="open"
                className="mt-auto flex flex-col gap-[0.3em] text-[0.8em] tabular-nums motion-safe:animate-fade-in-up"
            >
                <div className="flex justify-between gap-[0.6em] text-white">
                    <span>{position.holding}</span>
                    <span>{position.value}</span>
                </div>
                <div className="flex justify-between gap-[0.6em]">
                    <span className="text-white/40">PnL</span>
                    <span
                        className={
                            position.isProfit
                                ? 'text-primary-light-green'
                                : 'text-secondary-red'
                        }
                    >
                        {position.pnl}
                    </span>
                </div>
            </div>
        ) : (
            <span key="empty" className="mt-auto text-[0.8em] text-white/40">
                No open position
            </span>
        )}
    </div>
)
