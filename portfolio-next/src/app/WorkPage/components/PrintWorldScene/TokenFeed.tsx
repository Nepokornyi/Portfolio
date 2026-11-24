import { CSSProperties } from 'react'
import {
    FEED_TOKENS,
    STACKED_FEED_ROWS,
} from '@/app/WorkPage/components/PrintWorldScene/const'
import { Rectangle } from '@/components/Rectangle/Rectangle'
import { formatMarketCap } from '@/app/WorkPage/components/PrintWorldScene/lib/format'
import { PanelLabel } from '@/app/WorkPage/components/PrintWorldScene/PanelLabel'
import { TerminalPanel } from '@/app/WorkPage/components/PrintWorldScene/TerminalPanel'
import { FeedCard } from '@/app/WorkPage/components/PrintWorldScene/types'

const TokenRow = ({
    card,
    className,
}: {
    card: FeedCard
    className: string
}) => (
    <div
        data-cursor-target={card.cursorTarget}
        className={`flex shrink-0 items-center gap-[0.8em] border-b border-primary-hairline px-[0.8em] transition-colors duration-150 ${className} ${
            card.isSelected
                ? 'bg-white/5 shadow-[inset_0.2em_0_0_var(--color-primary-stroke)]'
                : ''
        } ${card.isNew ? 'motion-safe:animate-slide-in-flash' : ''}`}
    >
        <Rectangle
            variant="small"
            className={`size-[0.55em] shrink-0 ${card.color}`}
        />
        <div className="flex min-w-0 flex-1 flex-col text-[0.8em] leading-tight">
            <span className="font-bold text-white">{card.ticker}</span>
            <span className="truncate text-white/40">{card.name}</span>
        </div>
        <div className="flex shrink-0 flex-col items-end text-[0.8em] leading-tight tabular-nums">
            <span className="text-white">
                {formatMarketCap(card.marketCap)}
            </span>
            <span className="text-white/40">{card.displayAge}</span>
        </div>
    </div>
)

type TokenFeedProps = {
    feed: FeedCard[]
    className?: string
    listClassName: string
    rowClassName: string
}

export const TokenFeed = ({
    feed,
    className = '',
    listClassName,
    rowClassName,
}: TokenFeedProps) => (
    <TerminalPanel
        title={<PanelLabel>Trending</PanelLabel>}
        aside={<span className="text-[0.7em] text-white/40">MC · age</span>}
        className={className}
    >
        <div
            className={`flex min-h-0 overflow-hidden ${listClassName}`}
            style={
                {
                    '--feed-rows': FEED_TOKENS.length,
                    '--feed-rows-per-column': STACKED_FEED_ROWS,
                } as CSSProperties
            }
        >
            {feed.map((card) => (
                <TokenRow
                    key={card.ticker}
                    card={card}
                    className={rowClassName}
                />
            ))}
        </div>
    </TerminalPanel>
)
