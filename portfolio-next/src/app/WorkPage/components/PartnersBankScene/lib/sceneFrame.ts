import { clamp01 } from '@/app/WorkPage/lib/clamp01'
import { formatCrowns } from '@/app/WorkPage/lib/format'
import { IDLE_TARGET } from '@/app/WorkPage/lib/sceneCursor'
import {
    APPLICANT_NAME,
    CHARS_PER_TICK,
    CURSOR_TRAVEL_TICKS,
    ID_CHECKS,
    INCOME_FIELDS,
    LOAN,
    NET_INCOME,
    PERSONAL_FIELDS,
    PRESS_TICKS,
    SCAN_TICKS,
    SLIDER_END_POSITION,
    SLIDER_START_POSITION,
    STEPS,
    STORY,
} from '../const'
import {
    ApprovalState,
    CursorTarget,
    FormField,
    IdentityState,
    LoanState,
    PrimaryButtonState,
    SceneFrame,
    StepContent,
    StepId,
    SummaryRow,
} from '../types'

const shownAfter = (clickTick: number) => clickTick + PRESS_TICKS

const isPressed = (tick: number, clickTick: number) =>
    tick >= clickTick && tick < shownAfter(clickTick)

const getMonthlyPayment = (amount: number) => {
    const monthlyRate = LOAN.yearlyRate / 12
    const months = LOAN.years * 12
    return (amount * monthlyRate) / (1 - (1 + monthlyRate) ** -months)
}

const getLoan = (tick: number): LoanState => {
    const hasGrabbed = tick > STORY.sliderGrabbed
    const dragProgress = clamp01(
        (tick - STORY.sliderGrabbed) /
            (STORY.sliderReleased - STORY.sliderGrabbed),
    )
    const draggedAmount =
        LOAN.startAmount + (LOAN.amount - LOAN.startAmount) * dragProgress
    const amount = Math.round(draggedAmount / LOAN.sliderStep) * LOAN.sliderStep

    return {
        amount,
        sliderPosition: hasGrabbed
            ? SLIDER_END_POSITION
            : SLIDER_START_POSITION,
        isDragging: tick >= STORY.sliderGrabbed && tick < STORY.sliderReleased,
        monthlyPayment: getMonthlyPayment(amount),
    }
}

const getTypedChars = (tick: number, typingStartedTick: number) =>
    Math.max(0, tick - typingStartedTick + 1) * CHARS_PER_TICK

const typeFields = (
    fields: { label: string; value: string }[],
    typedChars: number,
): FormField[] => {
    let charsLeft = typedChars
    return fields.map(({ label, value }) => {
        const isFocused = charsLeft >= 0 && charsLeft < value.length
        const typedValue = value.slice(0, Math.max(0, charsLeft))
        charsLeft -= value.length
        return { label, value: typedValue, isFocused }
    })
}

const isTyped = (fields: FormField[]) =>
    fields.every((field) => !field.isFocused)

const getIdentity = (tick: number): IdentityState => {
    const scanProgress = clamp01((tick - STORY.idScanStarted) / SCAN_TICKS)
    return {
        isUploaded: tick >= shownAfter(STORY.idUploadClicked),
        isUploadPressed: isPressed(tick, STORY.idUploadClicked),
        scanProgress,
        checks: ID_CHECKS.map((label, index) => ({
            label,
            isPassed: scanProgress >= (index + 1) / ID_CHECKS.length,
        })),
    }
}

const offer = `${formatCrowns(LOAN.amount)} · ${formatCrowns(
    getMonthlyPayment(LOAN.amount),
)} / month`

const getApproval = (tick: number): ApprovalState => {
    const checkStartedTick = shownAfter(STORY.applicationSent)
    if (tick < checkStartedTick)
        return { phase: 'review', checkProgress: 0, offer }

    return {
        phase: tick >= STORY.approved ? 'approved' : 'checking',
        checkProgress: clamp01(
            (tick - checkStartedTick) / (STORY.approved - checkStartedTick),
        ),
        offer,
    }
}

const getActiveStep = (tick: number): StepId => {
    if (tick < shownAfter(STORY.loanSubmitted)) return 'loan'
    if (tick < shownAfter(STORY.personalSubmitted)) return 'personal'
    if (tick < shownAfter(STORY.idSubmitted)) return 'identity'
    if (tick < shownAfter(STORY.incomeSubmitted)) return 'income'
    return 'approval'
}

const getContent = (tick: number): StepContent => {
    const step = getActiveStep(tick)
    switch (step) {
        case 'loan':
            return { step, loan: getLoan(tick) }
        case 'personal':
            return {
                step,
                fields: typeFields(
                    PERSONAL_FIELDS,
                    getTypedChars(tick, STORY.personalTypingStarted),
                ),
            }
        case 'identity':
            return { step, identity: getIdentity(tick) }
        case 'income':
            return {
                step,
                fields: typeFields(
                    INCOME_FIELDS,
                    getTypedChars(tick, STORY.incomeTypingStarted),
                ),
            }
        case 'approval':
            return { step, approval: getApproval(tick) }
    }
}

const getPrimaryButton = (
    tick: number,
    content: StepContent,
): PrimaryButtonState | null => {
    const continueButton = (isEnabled: boolean, clickTick: number) => ({
        label: 'Continue',
        isEnabled,
        isPressed: isPressed(tick, clickTick),
    })

    switch (content.step) {
        case 'loan':
            return continueButton(true, STORY.loanSubmitted)
        case 'personal':
            return continueButton(
                isTyped(content.fields),
                STORY.personalSubmitted,
            )
        case 'identity':
            return continueButton(
                content.identity.scanProgress === 1,
                STORY.idSubmitted,
            )
        case 'income':
            return continueButton(
                isTyped(content.fields),
                STORY.incomeSubmitted,
            )
        case 'approval':
            return content.approval.phase === 'review'
                ? {
                      label: 'Send application',
                      isEnabled: true,
                      isPressed: isPressed(tick, STORY.applicationSent),
                  }
                : null
    }
}

const getSummary = (completedSteps: number): SummaryRow[] => {
    const row = (label: string, afterStep: StepId, value: string) => {
        const stepIndex = STEPS.findIndex((step) => step.id === afterStep)
        return { label, value: completedSteps > stepIndex ? value : null }
    }

    return [
        row('Loan', 'loan', formatCrowns(LOAN.amount)),
        row('Term', 'loan', `${LOAN.years} years`),
        row(
            'Monthly payment',
            'loan',
            formatCrowns(getMonthlyPayment(LOAN.amount)),
        ),
        row('Applicant', 'personal', APPLICANT_NAME),
        row('Identity', 'identity', 'Verified'),
        row('Income', 'income', formatCrowns(NET_INCOME)),
    ]
}

const getCursorTarget = (tick: number): CursorTarget => {
    const leaveFor = (clickTick: number) => clickTick - CURSOR_TRAVEL_TICKS
    if (tick < leaveFor(STORY.sliderGrabbed)) return IDLE_TARGET
    if (tick <= STORY.sliderGrabbed) return 'sliderStart'
    if (tick < leaveFor(STORY.loanSubmitted)) return 'sliderEnd'
    if (tick < leaveFor(STORY.idUploadClicked)) return 'primaryButton'
    if (tick < shownAfter(STORY.idUploadClicked)) return 'uploadButton'
    if (tick < STORY.applicationSent + CURSOR_TRAVEL_TICKS)
        return 'primaryButton'
    return IDLE_TARGET
}

const CLICK_TICKS = [
    STORY.loanSubmitted,
    STORY.personalSubmitted,
    STORY.idUploadClicked,
    STORY.idSubmitted,
    STORY.incomeSubmitted,
    STORY.applicationSent,
]

const isCursorDown = (tick: number) =>
    (tick >= STORY.sliderGrabbed && tick < STORY.sliderReleased) ||
    CLICK_TICKS.some((clickTick) => isPressed(tick, clickTick))

export const getSceneFrame = (tick: number): SceneFrame => {
    const content = getContent(tick)
    const isApproved = tick >= STORY.approved
    const completedSteps = isApproved
        ? STEPS.length
        : STEPS.findIndex((step) => step.id === content.step)

    return {
        completedSteps,
        content,
        primaryButton: getPrimaryButton(tick, content),
        summary: getSummary(completedSteps),
        isApproved,
        cursor: {
            target: getCursorTarget(tick),
            isClicking: isCursorDown(tick),
        },
    }
}
