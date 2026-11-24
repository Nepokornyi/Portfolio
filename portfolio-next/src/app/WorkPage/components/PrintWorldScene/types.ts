import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'
import { IDLE_TARGET } from '@/app/WorkPage/lib/sceneCursor'

export type FeedToken = {
    ticker: string
    name: string
    color: string
    listedAt: number
    age: string
    marketCap: number
    cursorTarget?: CursorTarget
}

export type FeedCard = FeedToken & {
    displayAge: string
    isNew: boolean
    isSelected: boolean
}

export type Candle = {
    open: number
    close: number
    high: number
    low: number
}

export type CursorTarget =
    typeof IDLE_TARGET | 'frogCard' | 'amountField' | 'tradeButton' | 'sellTab'

export type ChartState = {
    token: FeedToken
    candles: Candle[]
    marketCap: number
    change: number
    entry: TradeMark | null
    exit: TradeMark | null
}

export type TradeMark = {
    candleIndex: number
    marketCap: number
}

export type TradeSide = 'buy' | 'sell'

export type TradeTab = {
    side: TradeSide
    cursorTarget?: CursorTarget
}

export type TradeState = {
    ticker: string
    side: TradeSide
    amount: string
    isAmountFocused: boolean
    isSubmitPressed: boolean
    position: {
        holding: string
        value: string
        pnl: string
        isProfit: boolean
    } | null
}

// The result of the trade, after the sell
export type ClosedTrade = {
    token: FeedToken
    sold: string
    cost: string
    proceeds: string
    profit: string
    change: string
    isProfit: boolean
}

export type SceneFrame = {
    feed: FeedCard[]
    chart: ChartState | null
    trade: TradeState | null
    closedTrade: ClosedTrade | null
    toast: string | null
    cursor: SceneCursorState<CursorTarget>
}

export type SceneLayout = SceneBaseLayout & {
    page: string
    body: string
    panelGap: string
    feed: string
    feedList: string
    feedRow: string
    main: string
}
