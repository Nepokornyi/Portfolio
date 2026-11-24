import { SceneButton } from '@/app/WorkPage/components/SceneButton'
import { TradeSide, TradeState } from './types'

const SIDES: TradeSide[] = ['buy', 'sell']

type TradeFormProps = {
    trade: TradeState
    className?: string
}

export const TradeForm = ({ trade, className = '' }: TradeFormProps) => {
    const isBuy = trade.side === 'buy'

    return (
        <div className={`flex flex-col gap-[0.6em] ${className}`}>
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
                className={`flex h-[2.2em] shrink-0 items-center border border-primary-stroke bg-primary-input-background px-[0.6em] text-[0.9em] tabular-nums ${
                    trade.isAmountFocused
                        ? 'shadow-[0_0_0_0.1em_var(--color-primary-stroke)]'
                        : ''
                }`}
            >
                <span className="text-white">
                    {isBuy && '$'}
                    {trade.amount}
                </span>
                {trade.isAmountFocused && (
                    <span className="ml-[0.1em] inline-block h-[1.1em] border-l border-white motion-safe:animate-blink" />
                )}
                {!trade.amount && <span className="opacity-50">0</span>}
                <span className="ml-auto text-[0.75em] opacity-50">
                    {isBuy ? 'USD' : trade.ticker}
                </span>
            </div>

            <SceneButton
                isPressed={trade.isSubmitPressed}
                variant={isBuy ? 'filled' : 'outline'}
            >
                {trade.side} {trade.ticker}
            </SceneButton>
        </div>
    )
}
