import { formatCrowns } from '@/app/WorkPage/lib/format'
import { SceneLayout, StepId } from './types'

export const TICK_MS = 100
export const LOOP_TICKS = 116
export const HOLD_MS = 3000

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

export const LANDSCAPE_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/2]',
    fontSize: '1.8cqw',
    showSummary: true,
    idleCursor: { x: 44, y: 78 },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/4]',
    fontSize: '3.6cqw',
    showSummary: false,
    idleCursor: null,
    showPointer: false,
}
