import { FeedToken, SceneLayout } from './types'

export const TICK_MS = 100
export const LOOP_TICKS = 98
export const HOLD_MS = 3000

export const STORY = {
    frogListed: 8,
    frogSelected: 20,
    tradeOpened: 28,
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
]

export const DESKTOP_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/2]',
    fontSize: '1.8cqw',
    feed: 'left-0 top-[6%] h-[54%] w-[35%]',
    chart: 'right-0 top-0 h-[64%] w-[62%]',
    trade: 'bottom-0 left-[18%] h-[42%] w-[36%]',
    pnl: 'bottom-0 right-0 h-[30%] w-[40%]',
    toast: 'bottom-[12%] right-[3%]',
    cursor: {
        idle: { x: 56.5, y: 67 },
        frogCard: { x: 6, y: 16 },
        amountField: { x: 36, y: 76.5 },
        tradeButton: { x: 36, y: 84 },
        sellTab: { x: 45.5, y: 70 },
    },
    showPointer: true,
}

export const MOBILE_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/4]',
    fontSize: '3.6cqw',
    feed: 'left-0 top-0 h-[30%] w-[66%]',
    chart: 'right-0 top-[24%] h-[38%] w-[86%]',
    trade: 'bottom-0 left-0 h-[40%] w-[64%]',
    pnl: 'bottom-0 right-0 h-[28%] w-[46%]',
    toast: 'bottom-[14%] right-0 w-[34%]',
    cursor: {
        idle: null,
        frogCard: { x: 11, y: 10 },
        amountField: { x: 32, y: 78.5 },
        tradeButton: { x: 32, y: 86 },
        sellTab: { x: 46, y: 71.5 },
    },
    showPointer: false,
}
