import { FROG_CLOSES } from './const'
import { Candle, TradeMark } from './types'

const VIEW_WIDTH = 300
const VIEW_HEIGHT = 160
const SLOT_WIDTH = VIEW_WIDTH / FROG_CLOSES.length
const GRID_STEPS = [0.25, 0.5, 0.75]

const toCenterX = (index: number) => index * SLOT_WIDTH + SLOT_WIDTH / 2
const toPercent = (value: number, size: number) => `${(value / size) * 100}%`

const TAG_CLASS =
    'absolute -translate-x-1/2 px-[0.35em] text-[0.7em] font-bold leading-[1.4]'

type CandleChartProps = {
    candles: Candle[]
    entry: TradeMark | null
    exit: TradeMark | null
    className?: string
}

export const CandleChart = ({
    candles,
    entry,
    exit,
    className = '',
}: CandleChartProps) => {
    const highest = Math.max(...candles.map((candle) => candle.high))
    const lowest = Math.min(...candles.map((candle) => candle.low))
    const padding = (highest - lowest) * 0.12 || highest * 0.1
    const top = highest + padding
    const bottom = lowest - padding
    const toY = (value: number) =>
        ((top - value) / (top - bottom)) * VIEW_HEIGHT

    const liveClose = candles[candles.length - 1].close
    const entryCandle = entry && candles[entry.candleIndex]
    const exitCandle = exit && candles[exit.candleIndex]

    return (
        <div className={`relative ${className}`}>
            <svg
                viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
                preserveAspectRatio="none"
                className="absolute inset-0 size-full"
            >
                {GRID_STEPS.map((step) => (
                    <line
                        key={step}
                        x1="0"
                        x2={VIEW_WIDTH}
                        y1={step * VIEW_HEIGHT}
                        y2={step * VIEW_HEIGHT}
                        className="stroke-primary-hairline"
                        vectorEffect="non-scaling-stroke"
                    />
                ))}
                {entry && (
                    <line
                        x1={toCenterX(entry.candleIndex)}
                        x2={exit ? toCenterX(exit.candleIndex) : VIEW_WIDTH}
                        y1={toY(entry.marketCap)}
                        y2={toY(entry.marketCap)}
                        strokeOpacity={0.7}
                        className="stroke-primary-light-green"
                        vectorEffect="non-scaling-stroke"
                    />
                )}
                {candles.map((candle, index) => {
                    const isUp = candle.close >= candle.open
                    const center = toCenterX(index)
                    return (
                        <g
                            key={index}
                            className={
                                isUp
                                    ? 'fill-primary-light-green stroke-primary-light-green'
                                    : 'fill-primary-background stroke-primary-stroke'
                            }
                        >
                            <line
                                x1={center}
                                x2={center}
                                y1={toY(candle.high)}
                                y2={toY(candle.low)}
                                vectorEffect="non-scaling-stroke"
                            />
                            <rect
                                x={center - SLOT_WIDTH * 0.3}
                                y={toY(Math.max(candle.open, candle.close))}
                                width={SLOT_WIDTH * 0.6}
                                height={Math.max(
                                    1,
                                    Math.abs(
                                        toY(candle.open) - toY(candle.close),
                                    ),
                                )}
                                vectorEffect="non-scaling-stroke"
                            />
                        </g>
                    )
                })}
                <line
                    x1="0"
                    x2={VIEW_WIDTH}
                    y1={toY(liveClose)}
                    y2={toY(liveClose)}
                    strokeDasharray="4 4"
                    strokeOpacity={0.5}
                    className="stroke-primary-stroke"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

            {entry && entryCandle && (
                <span
                    className={`${TAG_CLASS} bg-primary-light-green text-black`}
                    style={{
                        left: toPercent(
                            toCenterX(entry.candleIndex),
                            VIEW_WIDTH,
                        ),
                        top: `calc(${toPercent(toY(entryCandle.low), VIEW_HEIGHT)} + 0.4em)`,
                    }}
                >
                    B
                </span>
            )}
            {exit && exitCandle && (
                <span
                    className={`${TAG_CLASS} -translate-y-full border border-primary-stroke bg-primary-background text-primary-stroke`}
                    style={{
                        left: toPercent(
                            toCenterX(exit.candleIndex),
                            VIEW_WIDTH,
                        ),
                        top: `calc(${toPercent(toY(exitCandle.high), VIEW_HEIGHT)} - 0.4em)`,
                    }}
                >
                    S
                </span>
            )}
        </div>
    )
}
