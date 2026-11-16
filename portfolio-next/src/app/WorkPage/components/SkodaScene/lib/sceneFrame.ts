import { clamp01 } from '@/app/WorkPage/lib/clamp01'
import {
    CURSOR_TRAVEL_TICKS,
    MODELS,
    PAINTS,
    PRESS_TICKS,
    STORY,
    TOTAL_COUNT_TICKS,
} from '../const'
import { CarModel, CursorTarget, Paint, SceneFrame } from '../types'

const shownAfter = (clickTick: number) => clickTick + PRESS_TICKS

const isPressed = (tick: number, clickTick: number) =>
    tick >= clickTick && tick < shownAfter(clickTick)

const CHOICE_CLICK_TICKS = [
    STORY.octaviaClicked,
    STORY.raceBlueClicked,
    STORY.mambaGreenClicked,
]

const CLICK_TICKS = [...CHOICE_CLICK_TICKS, STORY.continueClicked]

const getModel = (tick: number): CarModel =>
    tick < shownAfter(STORY.octaviaClicked) ? MODELS.fabia : MODELS.octavia

const getPaint = (tick: number): Paint => {
    if (tick < shownAfter(STORY.raceBlueClicked)) return PAINTS.moonWhite
    if (tick < shownAfter(STORY.mambaGreenClicked)) return PAINTS.raceBlue
    return PAINTS.mambaGreen
}

const getPressedPaint = (tick: number): Paint | null => {
    if (isPressed(tick, STORY.raceBlueClicked)) return PAINTS.raceBlue
    if (isPressed(tick, STORY.mambaGreenClicked)) return PAINTS.mambaGreen
    return null
}

const getPrice = (tick: number) =>
    getModel(tick).price + getPaint(tick).surcharge

const getTotal = (tick: number) => {
    const startedCounts = CHOICE_CLICK_TICKS.map(shownAfter).filter(
        (countStart) => countStart <= tick,
    )
    if (startedCounts.length === 0) return getPrice(tick)

    const countStart = startedCounts[startedCounts.length - 1]
    const oldPrice = getPrice(countStart - 1)
    const newPrice = getPrice(countStart)
    const progress = clamp01((tick - countStart + 1) / TOTAL_COUNT_TICKS)
    return oldPrice + (newPrice - oldPrice) * progress
}

const getCursorTarget = (tick: number): CursorTarget => {
    const leaveFor = (clickTick: number) => clickTick - CURSOR_TRAVEL_TICKS
    if (tick < leaveFor(STORY.octaviaClicked)) return 'idle'
    if (tick < leaveFor(STORY.raceBlueClicked)) return 'octaviaOption'
    if (tick < leaveFor(STORY.mambaGreenClicked)) return 'raceBlueSwatch'
    if (tick < leaveFor(STORY.continueClicked)) return 'mambaGreenSwatch'
    if (tick < shownAfter(STORY.continueClicked)) return 'continueButton'
    return 'idle'
}

export const getSceneFrame = (tick: number): SceneFrame => {
    const model = getModel(tick)
    const paint = getPaint(tick)
    const pressedModel = isPressed(tick, STORY.octaviaClicked)
        ? MODELS.octavia
        : null
    const pressedPaint = getPressedPaint(tick)

    return {
        model,
        paint,
        modelOptions: Object.values(MODELS).map((option) => ({
            ...option,
            isSelected: option === model,
            isPressed: option === pressedModel,
        })),
        paintOptions: Object.values(PAINTS).map((option) => ({
            ...option,
            isSelected: option === paint,
            isPressed: option === pressedPaint,
        })),
        total: getTotal(tick),
        isContinuePressed: isPressed(tick, STORY.continueClicked),
        isSummaryShown: tick >= shownAfter(STORY.continueClicked),
        cursor: {
            target: getCursorTarget(tick),
            isClicking: CLICK_TICKS.some((clickTick) =>
                isPressed(tick, clickTick),
            ),
        },
    }
}
