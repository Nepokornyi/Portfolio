import { FeedToken, SceneLayout, TradeTab } from './types'

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
        cursorTarget: 'frogCard',
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

export const TRADE_TABS: TradeTab[] = [
    { side: 'buy' },
    { side: 'sell', cursorTarget: 'sellTab' },
]

export const LANDSCAPE_LAYOUT: SceneLayout = {
    page: 'gap-[0.7em] p-[0.9em]',
    body: 'flex-row scene-stacked:flex-col',
    panelGap: 'gap-[0.7em]',
    feed: 'w-[30%] shrink-0 scene-stacked:w-auto',
    feedList:
        'flex-1 flex-col scene-stacked:grid scene-stacked:grid-flow-col scene-stacked:grid-rows-5 scene-stacked:gap-x-[1.6em]',
    feedRow: 'min-h-[2.6em] scene-roomy:h-[calc(100%/var(--feed-rows))]',
    main: 'flex-1',
    idleCursor: { x: 84, y: 60 },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    page: 'gap-[0.5em] p-[0.6em]',
    body: 'flex-col',
    panelGap: 'gap-[0.5em]',
    feed: 'flex-1',
    feedList: 'flex-1 flex-col flex-wrap',
    feedRow: 'h-[2.6em] w-full',
    main: 'h-[65%] max-h-[36em] shrink-0',
    idleCursor: null,
    showPointer: false,
}
