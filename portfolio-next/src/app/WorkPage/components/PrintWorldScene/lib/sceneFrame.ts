import {
    BUY_AMOUNT,
    CANDLE_TICKS,
    CURSOR_TRAVEL_TICKS,
    FEED_TOKENS,
    FROG_CLOSES,
    STORY,
    TOKEN_SUPPLY,
    TYPE_TICKS,
} from '../const'
import {
    Candle,
    ChartState,
    ClosedTrade,
    CursorTarget,
    FeedToken,
    SceneFrame,
    TradeMark,
} from '../types'
import {
    formatChange,
    formatDollars,
    formatSignedDollars,
    formatTokenAmount,
} from './format'

const FROG = FEED_TOKENS.find((token) => token.ticker === 'FROG') as FeedToken

const roundToTenth = (value: number) => Math.round(value * 10) / 10

const frogCandles: Candle[] = FROG_CLOSES.map((close, index) => {
    const open = index === 0 ? close * 0.94 : FROG_CLOSES[index - 1]
    const wick = 0.008 + (index % 4) * 0.005
    return {
        open,
        close,
        high: Math.max(open, close) * (1 + wick),
        low: Math.min(open, close) * (1 - wick),
    }
})

const getFrogCandles = (tick: number): Candle[] => {
    const elapsed = Math.max(0, tick - STORY.frogListed)
    const liveIndex = Math.floor(elapsed / CANDLE_TICKS)
    if (liveIndex >= frogCandles.length) return frogCandles

    const live = frogCandles[liveIndex]
    const progress = ((elapsed % CANDLE_TICKS) + 1) / CANDLE_TICKS
    const close = roundToTenth(live.open + (live.close - live.open) * progress)
    const wickTop = live.high - Math.max(live.open, live.close)
    const wickBottom = Math.min(live.open, live.close) - live.low

    return [
        ...frogCandles.slice(0, liveIndex),
        {
            open: live.open,
            close,
            high: Math.max(live.open, close) + wickTop * progress,
            low: Math.min(live.open, close) - wickBottom * progress,
        },
    ]
}

const getFrogChart = (tick: number): Omit<ChartState, 'entry' | 'exit'> => {
    const candles = getFrogCandles(tick)
    const marketCap = candles[candles.length - 1].close
    return {
        token: FROG,
        candles,
        marketCap,
        change: marketCap / candles[0].open - 1,
    }
}

const getFill = (clickTick: number): TradeMark => ({
    candleIndex: Math.floor((clickTick - STORY.frogListed) / CANDLE_TICKS),
    marketCap: getFrogChart(clickTick).marketCap,
})
const buyFill = getFill(STORY.buyClicked)
const sellFill = getFill(STORY.sellClicked)

const buyCost = Number(BUY_AMOUNT)
const tokenPrice = (marketCap: number) => (marketCap * 1000) / TOKEN_SUPPLY
const boughtTokens = buyCost / tokenPrice(buyFill.marketCap)
const boughtAmount = formatTokenAmount(boughtTokens)
const boughtLabel = `${boughtAmount} ${FROG.ticker}`

const getTradeValue = (marketCap: number) => {
    const value = boughtTokens * tokenPrice(marketCap)
    const profit = value - buyCost
    return { value, profit, change: profit / buyCost }
}

const getPosition = (marketCap: number) => {
    const { value, profit, change } = getTradeValue(marketCap)
    return {
        holding: boughtLabel,
        value: formatDollars(value),
        pnl: `${formatSignedDollars(profit)} (${formatChange(change)})`,
        isProfit: profit >= 0,
    }
}

const sellResult = getTradeValue(sellFill.marketCap)
const closedTrade: ClosedTrade = {
    token: FROG,
    sold: boughtAmount,
    cost: formatDollars(buyCost),
    proceeds: formatDollars(sellResult.value),
    profit: formatSignedDollars(sellResult.profit),
    change: formatChange(sellResult.change),
    isProfit: sellResult.profit >= 0,
}

const CLICK_TICKS = [
    STORY.frogSelected,
    STORY.amountFocused,
    STORY.buyClicked,
    STORY.sellSelected,
    STORY.sellClicked,
]

const getCursorTarget = (tick: number): CursorTarget => {
    const leaveFor = (clickTick: number) => clickTick - CURSOR_TRAVEL_TICKS
    if (tick < leaveFor(STORY.frogSelected)) return 'idle'
    if (tick < leaveFor(STORY.amountFocused)) return 'frogCard'
    if (tick < leaveFor(STORY.buyClicked)) return 'amountField'
    if (tick < STORY.buyClicked + CURSOR_TRAVEL_TICKS) return 'tradeButton'
    if (tick < leaveFor(STORY.sellSelected)) return 'idle'
    if (tick < leaveFor(STORY.sellClicked)) return 'sellTab'
    if (tick < STORY.sellClicked + CURSOR_TRAVEL_TICKS) return 'tradeButton'
    return 'idle'
}

const isPressed = (tick: number, clickTick: number) =>
    tick >= clickTick && tick <= clickTick + 1

const isClickTick = (tick: number) =>
    CLICK_TICKS.some((clickTick) => isPressed(tick, clickTick))

export const getSceneFrame = (tick: number): SceneFrame => {
    const hasBought = tick > STORY.buyClicked
    const hasSold = tick > STORY.sellClicked
    const isSellSide = tick >= STORY.sellSelected
    const frogChart = getFrogChart(tick)
    const isChartOpen = tick >= STORY.frogSelected

    const feed = FEED_TOKENS.filter((token) => token.listedAt <= tick).map(
        (token) => {
            const isNew = token.listedAt > 0
            return {
                ...token,
                marketCap:
                    token === FROG ? frogChart.marketCap : token.marketCap,
                displayAge: isNew
                    ? `${Math.floor((tick - token.listedAt) / CANDLE_TICKS)}s`
                    : token.age,
                isNew,
                isSelected: isChartOpen && token === FROG,
            }
        },
    )

    const typedDigits = Math.max(
        0,
        Math.floor((tick - STORY.amountFocused - 1) / TYPE_TICKS),
    )

    // The sell side starts with the full position in the field. After the sell, the field is empty.
    const sellAmount = hasSold ? '' : boughtAmount

    return {
        feed,
        chart: isChartOpen
            ? {
                  ...frogChart,
                  entry: hasBought ? buyFill : null,
                  exit: hasSold ? sellFill : null,
              }
            : null,
        trade:
            tick >= STORY.tradeOpened
                ? {
                      ticker: FROG.ticker,
                      side: isSellSide ? 'sell' : 'buy',
                      amount: isSellSide
                          ? sellAmount
                          : BUY_AMOUNT.slice(0, typedDigits),
                      isAmountFocused:
                          tick >= STORY.amountFocused &&
                          tick < STORY.buyClicked,
                      isSubmitPressed:
                          isPressed(tick, STORY.buyClicked) ||
                          isPressed(tick, STORY.sellClicked),
                      position:
                          hasBought && !hasSold
                              ? getPosition(frogChart.marketCap)
                              : null,
                  }
                : null,
        closedTrade: hasSold ? closedTrade : null,
        toast:
            hasBought && tick < STORY.toastHidden
                ? `Bought ${boughtLabel} for $${BUY_AMOUNT}`
                : null,
        cursor: {
            target: getCursorTarget(tick),
            isClicking: isClickTick(tick),
        },
    }
}
