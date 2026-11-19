import { FeedToken, SceneLayout } from './types'

export const TICK_MS = 100
export const LOOP_TICKS = 98
export const HOLD_MS = 3000

export const STORY = {
    frogListed: 8,
    frogSelected: 20,
    amountFocused: 38,
    buyClicked: 52,
    botListed: 66,
    toastHidden: 74,
    sellSelected: 76,
    sellClicked: 88,
}

export const CURSOR_TRAVEL_TICKS = 8
export const TYPE_TICKS = 2
export const CANDLE_TICKS = 3

export const BUY_AMOUNT = '50'
export const TOKEN_SUPPLY = 1_000_000_000

export const FROG_CLOSES = [
    1.8, 2.3, 2.1, 2.9, 3.6, 3.3, 4.2, 4.9, 4.6, 5.4, 6.1, 5.7, 6.6, 7.4, 7.0,
    7.9, 12.4, 13.6, 12.9, 14.8, 16.1, 15.4, 17.2, 18.3, 17.5, 19.4, 21.0, 19.6,
    18.4, 18.9,
]

export const FEED_TOKENS: FeedToken[] = [
    {
        ticker: 'BOT',
        name: 'Robo Inu',
        color: 'bg-primary-green',
        listedAt: STORY.botListed,
        age: '',
        marketCap: 2.1,
    },
    {
        ticker: 'FROG',
        name: 'Frog Coin',
        color: 'bg-primary-light-green',
        listedAt: STORY.frogListed,
        age: '',
        marketCap: FROG_CLOSES[0],
    },
    {
        ticker: 'MOON',
        name: 'Moon Cat',
        color: 'bg-primary-blue',
        listedAt: 0,
        age: '43m',
        marketCap: 8.1,
    },
    {
        ticker: 'GIGA',
        name: 'Giga Cat',
        color: 'bg-primary-highlight',
        listedAt: 0,
        age: '2h',
        marketCap: 41.0,
    },
    {
        ticker: 'WAGMI',
        name: 'We Are Gonna',
        color: 'bg-primary-dark-blue',
        listedAt: 0,
        age: '5h',
        marketCap: 3.3,
    },
    {
        ticker: 'NEKO',
        name: 'Neko Cash',
        color: 'bg-secondary-discord',
        listedAt: 0,
        age: '7h',
        marketCap: 12.6,
    },
    {
        ticker: 'KOI',
        name: 'Koi Pond',
        color: 'bg-secondary-red',
        listedAt: 0,
        age: '9h',
        marketCap: 22.8,
    },
    {
        ticker: 'DUCK',
        name: 'Rubber Duck',
        color: 'bg-primary-stroke',
        listedAt: 0,
        age: '12h',
        marketCap: 6.4,
    },
    {
        ticker: 'SHRMP',
        name: 'Shrimp Club',
        color: 'bg-secondary-linkedin',
        listedAt: 0,
        age: '1d',
        marketCap: 4.7,
    },
]

export const LANDSCAPE_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/2]',
    fontSize: '1.8cqw',
    page: 'gap-[0.7em] p-[0.9em]',
    body: 'flex-row gap-[0.7em]',
    feed: 'w-[30%] shrink-0',
    visibleTokens: FEED_TOKENS.length,
    market: 'gap-[0.7em]',
    tradePanel: 'h-[9em] shrink-0',
    cursor: {
        idle: { x: 84, y: 60 },
        frogCard: { x: 15.5, y: 26 },
        amountField: { x: 49.5, y: 83.2 },
        tradeButton: { x: 49.7, y: 91 },
        sellTab: { x: 57.9, y: 76.8 },
    },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/4]',
    fontSize: '3.6cqw',
    page: 'gap-[0.5em] p-[0.6em]',
    body: 'flex-col gap-[0.5em]',
    feed: 'shrink-0',
    visibleTokens: 3,
    market: 'gap-[0.5em]',
    tradePanel: 'h-[9em] shrink-0',
    cursor: {
        idle: null,
        frogCard: { x: 30, y: 25.4 },
        amountField: { x: 28.8, y: 84.8 },
        tradeButton: { x: 29, y: 92.6 },
        sellTab: { x: 40.3, y: 78.4 },
    },
    showPointer: false,
}
