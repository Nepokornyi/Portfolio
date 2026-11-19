import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'
import { IDLE_TARGET } from '@/app/WorkPage/hooks/useSceneCursorPosition'

export type StepId = 'loan' | 'personal' | 'identity' | 'income' | 'approval'

export type SliderMark = {
    position: number
    cursorTarget: CursorTarget
}

export type LoanState = {
    amount: number
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
    scanProgress: number
    checks: { label: string; isPassed: boolean }[]
}

export type ApprovalState = {
    phase: 'review' | 'checking' | 'approved'
    checkProgress: number
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

export type SummaryRow = {
    label: string
    value: string | null
}

export type CursorTarget =
    | typeof IDLE_TARGET
    | 'sliderStart'
    | 'sliderEnd'
    | 'uploadButton'
    | 'primaryButton'

export type SceneFrame = {
    completedSteps: number
    content: StepContent
    primaryButton: PrimaryButtonState | null
    summary: SummaryRow[]
    isApproved: boolean
    cursor: SceneCursorState<CursorTarget>
}

export type SceneLayout = SceneBaseLayout & {
    body: string
    main: string
    step: string
    summary: string
    summaryRow: string
}
