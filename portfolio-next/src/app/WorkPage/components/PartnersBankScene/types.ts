import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'

export type StepId = 'loan' | 'personal' | 'identity' | 'income' | 'approval'

export type LoanState = {
    amount: number
    // The position of the slider thumb on the track, from 0 to 1
    sliderPosition: number
    isDragging: boolean
    monthlyPayment: number
}

export type FormField = {
    label: string
    value: string
    isFocused: boolean
}

export type IdentityState = {
    isUploaded: boolean
    isUploadPressed: boolean
    // From 0 to 1
    scanProgress: number
    checks: { label: string; isPassed: boolean }[]
}

export type ApprovalState = {
    phase: 'review' | 'checking' | 'approved'
    // From 0 to 1
    checkProgress: number
    // The approved loan, for example "4 500 000 Kč · 23 583 Kč / month"
    offer: string
}

export type StepContent =
    | { step: 'loan'; loan: LoanState }
    | { step: 'personal' | 'income'; fields: FormField[] }
    | { step: 'identity'; identity: IdentityState }
    | { step: 'approval'; approval: ApprovalState }

export type PrimaryButtonState = {
    label: string
    isEnabled: boolean
    isPressed: boolean
}

// A row has no value until its step is complete
export type SummaryRow = {
    label: string
    value: string | null
}

export type CursorTarget =
    'idle' | 'sliderStart' | 'sliderEnd' | 'uploadButton' | 'primaryButton'

export type SceneFrame = {
    completedSteps: number
    content: StepContent
    primaryButton: PrimaryButtonState | null
    summary: SummaryRow[]
    isApproved: boolean
    cursor: SceneCursorState<CursorTarget>
}

export type SceneLayout = SceneBaseLayout<CursorTarget> & {
    showSummary: boolean
}
