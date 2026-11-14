import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'

export type Product = {
    name: string
    // A short line under the name, for example the colour and the memory
    details: string
    price: number
}

export type PaymentMethodId = 'card' | 'instalments'

export type PaymentMethod = {
    label: string
    // A short line under the label
    note: string
}

export type PaymentMethodOption = PaymentMethod & {
    isSelected: boolean
    isPressed: boolean
}

export type TermMonths = 6 | 12 | 24

type TermOption = {
    months: TermMonths
    isSelected: boolean
    isPressed: boolean
}

export type CalculatorState = {
    termOptions: TermOption[]
    // In whole crowns. After each term click, both count to the values of the new plan over a few ticks.
    monthlyPayment: number
    total: number
    isApplyPressed: boolean
}

// The agreed plan, for example 24 × 1 521 Kč. The monthly payment is rounded to whole crowns,
// so the total is the months × the monthly payment.
export type InstalmentPlan = {
    months: TermMonths
    monthlyPayment: number
    total: number
}

// The instalment panel shows one view at a time. Each view has only the data that it shows.
export type InstalmentPanel =
    | { view: 'placeholder' }
    | { view: 'calculator'; calculator: CalculatorState }
    | {
          view: 'checking'
          // From 0 to 1
          checkProgress: number
      }
    | { view: 'approved'; plan: InstalmentPlan }

export type CursorTarget =
    | 'idle'
    | 'instalmentsOption'
    | 'twelveMonthsButton'
    | 'twentyFourMonthsButton'
    | 'applyButton'

export type SceneFrame = {
    paymentMethodOptions: PaymentMethodOption[]
    panel: InstalmentPanel
    cursor: SceneCursorState<CursorTarget>
}

export type SceneLayout = SceneBaseLayout<CursorTarget> & {
    // The order and the instalment panel side by side, or the order above the panel
    body: string
    order: string
    panel: string
    // The product as a tall card with a large picture, or as a compact row
    productCard: string
    productPicture: string
    showPaymentLabel: boolean
    showPaymentNotes: boolean
}
