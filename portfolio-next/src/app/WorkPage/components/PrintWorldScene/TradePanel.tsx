import { OpenPosition } from './OpenPosition'
import { PanelPlaceholder } from './PanelPlaceholder'
import { TerminalPanel } from './TerminalPanel'
import { TradeForm } from './TradeForm'
import { TradeResult } from './TradeResult'
import { ClosedTrade, TradeState } from './types'

type TradePanelProps = {
    trade: TradeState | null
    closedTrade: ClosedTrade | null
    className?: string
}

export const TradePanel = ({
    trade,
    closedTrade,
    className = '',
}: TradePanelProps) => (
    <TerminalPanel className={className}>
        {trade ? (
            <div className="flex flex-1 motion-safe:animate-fade-in-up">
                <TradeForm
                    trade={trade}
                    className="w-[55%] max-w-[24em] p-[0.8em]"
                />
                <div className="flex min-w-0 flex-1 border-l border-primary-hairline p-[0.8em]">
                    {closedTrade ? (
                        <TradeResult closedTrade={closedTrade} />
                    ) : (
                        <OpenPosition position={trade.position} />
                    )}
                </div>
            </div>
        ) : (
            <PanelPlaceholder message="Select a token to trade" />
        )}
    </TerminalPanel>
)
