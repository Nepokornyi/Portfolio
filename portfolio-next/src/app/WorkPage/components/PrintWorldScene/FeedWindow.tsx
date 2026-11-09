import { Rectangle } from '@/components/Rectangle/Rectangle'
import { formatMarketCap } from './lib/format'
import { SceneWindow } from './SceneWindow'
import { FeedCard } from './types'

const TokenRow = ({ card }: { card: FeedCard }) => (
    <div
        className={`flex items-center gap-[0.7em] border-b border-primary-hairline px-[1em] py-[0.75em] text-[0.8em] ${
            card.isSelected
                ? 'bg-white/5 shadow-[inset_0.2em_0_0_var(--color-primary-stroke)]'
                : ''
        } ${card.isNew ? 'motion-safe:animate-slide-in-flash' : ''}`}
    >
        <Rectangle
            variant="small"
            className={`size-[0.6em] shrink-0 ${card.color}`}
        />
        <span className="font-bold text-white">{card.ticker}</span>
        <span className="text-white/40">{card.displayAge}</span>
        <span className="ml-auto text-white">
            <span className="text-white/40">MC </span>
            {formatMarketCap(card.marketCap)}
        </span>
    </div>
)

type FeedWindowProps = {
    feed: FeedCard[]
    className?: string
}

export const FeedWindow = ({ feed, className = '' }: FeedWindowProps) => (
    <SceneWindow title="trending" className={className}>
        {feed.map((card) => (
            <TokenRow key={card.ticker} card={card} />
        ))}
    </SceneWindow>
)
