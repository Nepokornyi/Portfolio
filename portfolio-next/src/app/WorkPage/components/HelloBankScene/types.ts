import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'
import { IDLE_TARGET } from '@/app/WorkPage/lib/sceneCursor'

export type Product = {
    name: string
    details: string
    price: number
}

export type PaymentMethodId = 'card' | 'instalments'

export type PaymentMethod = {
    label: string
    note: string
    cursorTarget?: CursorTarget
}

export type PaymentMethodOption = PaymentMethod & {
    isSelected: boolean
    isPressed: boolean
}

export type TermMonths = 6 | 12 | 24

export type Term = {
    months: TermMonths
    cursorTarget?: CursorTarget
}

type TermOption = Term & {
    isSelected: boolean
    isPressed: boolean
}

export type CalculatorState = {
    termOptions: TermOption[]
    monthlyPayment: number
    total: number
    isApplyPressed: boolean
}

export type InstalmentPlan = {
    months: TermMonths
    monthlyPayment: number
    total: number
}

export type InstalmentPanel =
    | { view: 'placeholder' }
    | { view: 'calculator'; calculator: CalculatorState }
    | {
          view: 'checking'
          checkProgress: number
      }
    | { view: 'approved'; plan: InstalmentPlan }

export type CursorTarget =
    | typeof IDLE_TARGET
    | 'instalmentsOption'
    | 'twelveMonthsButton'
    | 'twentyFourMonthsButton'
    | 'applyButton'

export type SceneFrame = {
    paymentMethodOptions: PaymentMethodOption[]
    panel: InstalmentPanel
    cursor: SceneCursorState<CursorTarget>
}

export type SceneLayout = SceneBaseLayout & {
    body: string
    order: string
    panel: string
    productCard: string
    productPicture: string
    productDetails: string
    paymentLabel: string
    paymentMethods: string
    paymentNote: string
}
