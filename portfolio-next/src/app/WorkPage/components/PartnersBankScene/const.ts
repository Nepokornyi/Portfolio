import { formatCrowns } from './lib/format'
import { SceneLayout, StepId } from './types'

export const TICK_MS = 100
export const LOOP_TICKS = 116
export const HOLD_MS = 3000

// The tick of each event in the story
export const STORY = {
    sliderGrabbed: 9,
    sliderReleased: 17,
    loanSubmitted: 26,
    personalTypingStarted: 29,
    personalSubmitted: 41,
    idUploadClicked: 51,
    idScanStarted: 55,
    idSubmitted: 72,
    incomeTypingStarted: 75,
    incomeSubmitted: 84,
    applicationSent: 94,
    approved: 108,
}

export const CURSOR_TRAVEL_TICKS = 8
// A click shows as pressed for this many ticks. Then its result shows.
export const PRESS_TICKS = 2
export const CHARS_PER_TICK = 4
export const SCAN_TICKS = 12

export const STEPS: { id: StepId; label: string; title: string }[] = [
    { id: 'loan', label: 'Loan', title: 'How much do you need?' },
    { id: 'personal', label: 'Details', title: 'Your details' },
    { id: 'identity', label: 'Identity', title: 'Verify your identity' },
    { id: 'income', label: 'Income', title: 'Your income' },
    { id: 'approval', label: 'Approval', title: 'Review and send' },
]

export const LOAN = {
    sliderMin: 2_000_000,
    sliderMax: 6_000_000,
    sliderStep: 50_000,
    startAmount: 3_000_000,
    amount: 4_500_000,
    years: 30,
    yearlyRate: 0.0479,
}

export const APPLICANT_NAME = 'Jan Novák'
export const NET_INCOME = 85_000

export const PERSONAL_FIELDS = [
    { label: 'Full name', value: APPLICANT_NAME },
    { label: 'Date of birth', value: '14. 3. 1988' },
    { label: 'Address', value: 'Dlouhá 12, Praha' },
]

export const INCOME_FIELDS = [
    { label: 'Employer', value: 'ACME s.r.o.' },
    { label: 'Net monthly income', value: formatCrowns(NET_INCOME) },
]

export const ID_CHECKS = [
    'Photo is readable',
    'Name matches',
    'Document is valid',
]

export const DESKTOP_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/2]',
    fontSize: '1.8cqw',
    showSummary: true,
    cursor: {
        idle: { x: 44, y: 78 },
        sliderStart: { x: 17.9, y: 43.1 },
        sliderEnd: { x: 39.1, y: 43.1 },
        uploadButton: { x: 32.1, y: 44.7 },
        primaryButton: { x: 55.6, y: 94.6 },
    },
    showPointer: true,
}

export const MOBILE_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/4]',
    fontSize: '3.6cqw',
    showSummary: false,
    cursor: {
        idle: null,
        sliderStart: { x: 28.7, y: 43.1 },
        sliderEnd: { x: 60.6, y: 43.1 },
        uploadButton: { x: 50, y: 44.7 },
        primaryButton: { x: 77.5, y: 93.4 },
    },
    showPointer: false,
}
