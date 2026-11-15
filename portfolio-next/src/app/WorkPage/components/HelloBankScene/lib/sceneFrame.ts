import {
    CURSOR_TRAVEL_TICKS,
    PAYMENT_COUNT_TICKS,
    PAYMENT_METHODS,
    PRESS_TICKS,
    PRODUCT,
    STORY,
    TERMS,
    YEARLY_RATE,
} from '../const'
import {
    CalculatorState,
    CursorTarget,
    InstalmentPanel,
    InstalmentPlan,
    SceneFrame,
    TermMonths,
} from '../types'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

const shownAfter = (clickTick: number) => clickTick + PRESS_TICKS

const isPressed = (tick: number, clickTick: number) =>
    tick >= clickTick && tick < shownAfter(clickTick)

const TERM_CLICK_TICKS = [
    STORY.twelveMonthsClicked,
    STORY.twentyFourMonthsClicked,
]

const CLICK_TICKS = [
    STORY.instalmentsClicked,
    ...TERM_CLICK_TICKS,
    STORY.applyClicked,
]

const getPlan = (months: TermMonths): InstalmentPlan => {
    const monthlyRate = YEARLY_RATE / 12
    const monthlyPayment = Math.round(
        (PRODUCT.price * monthlyRate) / (1 - (1 + monthlyRate) ** -months),
    )
    return { months, monthlyPayment, total: monthlyPayment * months }
}

const getTerm = (tick: number): TermMonths => {
    if (tick < shownAfter(STORY.twelveMonthsClicked)) return 6
    if (tick < shownAfter(STORY.twentyFourMonthsClicked)) return 12
    return 24
}

const getPressedTerm = (tick: number): TermMonths | null => {
    if (isPressed(tick, STORY.twelveMonthsClicked)) return 12
    if (isPressed(tick, STORY.twentyFourMonthsClicked)) return 24
    return null
}

const getCountedAmounts = (tick: number) => {
    const plan = getPlan(getTerm(tick))
    const startedCounts = TERM_CLICK_TICKS.map(shownAfter).filter(
        (countStart) => countStart <= tick,
    )
    if (startedCounts.length === 0)
        return { monthlyPayment: plan.monthlyPayment, total: plan.total }

    const countStart = startedCounts[startedCounts.length - 1]
    const oldPlan = getPlan(getTerm(countStart - 1))
    const progress = clamp01((tick - countStart + 1) / PAYMENT_COUNT_TICKS)
    const count = (from: number, to: number) =>
        Math.round(from + (to - from) * progress)

    return {
        monthlyPayment: count(oldPlan.monthlyPayment, plan.monthlyPayment),
        total: count(oldPlan.total, plan.total),
    }
}

const getCalculator = (tick: number): CalculatorState => {
    const term = getTerm(tick)
    const pressedTerm = getPressedTerm(tick)

    return {
        termOptions: TERMS.map((months) => ({
            months,
            isSelected: months === term,
            isPressed: months === pressedTerm,
        })),
        ...getCountedAmounts(tick),
        isApplyPressed: isPressed(tick, STORY.applyClicked),
    }
}

const getInstalmentPanel = (tick: number): InstalmentPanel => {
    const checkStartedTick = shownAfter(STORY.applyClicked)
    if (tick < checkStartedTick)
        return { view: 'calculator', calculator: getCalculator(tick) }

    const lastCheckTick = STORY.approved - 1
    if (tick <= lastCheckTick)
        return {
            view: 'checking',
            checkProgress: clamp01(
                (tick - checkStartedTick) / (lastCheckTick - checkStartedTick),
            ),
        }

    return { view: 'approved', plan: getPlan(getTerm(tick)) }
}

const getCursorTarget = (tick: number): CursorTarget => {
    const leaveFor = (clickTick: number) => clickTick - CURSOR_TRAVEL_TICKS
    if (tick < leaveFor(STORY.instalmentsClicked)) return 'idle'
    if (tick < leaveFor(STORY.twelveMonthsClicked)) return 'instalmentsOption'
    if (tick < leaveFor(STORY.twentyFourMonthsClicked))
        return 'twelveMonthsButton'
    if (tick < leaveFor(STORY.applyClicked)) return 'twentyFourMonthsButton'
    if (tick < shownAfter(STORY.applyClicked)) return 'applyButton'
    return 'idle'
}

export const getSceneFrame = (tick: number): SceneFrame => {
    const hasChosenInstalments = tick >= shownAfter(STORY.instalmentsClicked)
    const paymentMethod = hasChosenInstalments
        ? PAYMENT_METHODS.instalments
        : PAYMENT_METHODS.card
    const pressedPaymentMethod = isPressed(tick, STORY.instalmentsClicked)
        ? PAYMENT_METHODS.instalments
        : null

    return {
        paymentMethodOptions: Object.values(PAYMENT_METHODS).map((option) => ({
            ...option,
            isSelected: option === paymentMethod,
            isPressed: option === pressedPaymentMethod,
        })),
        panel: hasChosenInstalments
            ? getInstalmentPanel(tick)
            : { view: 'placeholder' },
        cursor: {
            target: getCursorTarget(tick),
            isClicking: CLICK_TICKS.some((clickTick) =>
                isPressed(tick, clickTick),
            ),
        },
    }
}
