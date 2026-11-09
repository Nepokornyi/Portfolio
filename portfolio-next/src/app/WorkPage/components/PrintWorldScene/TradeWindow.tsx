import { SceneWindow } from './SceneWindow'
import { TradeSide, TradeState } from './types'

const SIDES: TradeSide[] = ['buy', 'sell']

type TradeWindowProps = {
    trade: TradeState
    className?: string
}

export const TradeWindow = ({ trade, className = '' }: TradeWindowProps) => {
    const isBuy = trade.side === 'buy'

    return (
        <SceneWindow title="trade" className={className}>
            <div className="flex h-full flex-col gap-[0.8em] p-[1em]">
                <div className="flex text-[0.8em]">
                    {SIDES.map((side) => (
                        <span
                            key={side}
                            className={`flex-1 border-b pb-[0.4em] text-center ${
                                side === trade.side
                                    ? 'border-primary-stroke text-white'
                                    : 'border-primary-hairline text-white/40'
                            }`}
                        >
                            {side}
                        </span>
                    ))}
                </div>

                <div
                    className={`flex h-[2.2em] shrink-0 items-center border border-primary-stroke bg-primary-input-background px-[0.6em] text-[0.9em] ${
                        trade.isAmountFocused
                            ? 'shadow-[0_0_0_1px_var(--color-primary-stroke)]'
                            : ''
                    }`}
                >
                    <span className="text-white">
                        {isBuy && '$'}
                        {trade.amount}
                    </span>
                    {trade.isAmountFocused && (
                        <span className="ml-px inline-block h-[1.1em] border-l border-white motion-safe:animate-blink" />
                    )}
                    {!trade.amount && <span className="opacity-50">0</span>}
                    <span className="ml-auto text-[0.75em] opacity-50">
                        {isBuy ? 'USD' : trade.ticker}
                    </span>
                </div>

                <div className="relative mb-[0.3em] mr-[0.3em]">
                    <span className="absolute inset-0 translate-x-[0.3em] translate-y-[0.3em] border border-primary-button" />
                    <div
                        className={`relative flex h-[2.2em] items-center justify-center border border-primary-button font-bold italic transition-transform duration-100 ${
                            isBuy
                                ? 'bg-primary-button text-black'
                                : 'bg-primary-background text-primary-button'
                        } ${trade.isSubmitPressed ? 'translate-x-[0.2em] translate-y-[0.2em]' : ''}`}
                    >
                        {trade.side} {trade.ticker}
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-[0.3em] border-t border-primary-hairline pt-[0.7em] text-[0.8em] text-white/40">
                    {trade.position ? (
                        <>
                            <div className="flex justify-between text-white">
                                <span>{trade.position.holding}</span>
                                <span>{trade.position.value}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>PnL</span>
                                <span
                                    className={
                                        trade.position.isProfit
                                            ? 'text-primary-light-green'
                                            : 'text-secondary-red'
                                    }
                                >
                                    {trade.position.pnl}
                                </span>
                            </div>
                        </>
                    ) : (
                        <span>No open position</span>
                    )}
                </div>
            </div>
        </SceneWindow>
    )
}
