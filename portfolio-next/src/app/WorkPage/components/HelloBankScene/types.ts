import { SceneBaseLayout } from '@/app/WorkPage/components/SceneBrowserWindow'

export type Product = {
    name: string
    details: string
    price: number
}

export type PaymentMethodId = 'card' | 'instalments'

export type PaymentMethod = {
    label: string
    note: string
}

export type PaymentMethodOption = PaymentMethod & {
    isSelected: boolean
    isPressed: boolean
}

export type TermMonths = 6 | 12 | 24

export type TermOption = {
    months: TermMonths
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
    | 'idle'
    | 'instalmentsOption'
    | 'twelveMonthsButton'
    | 'twentyFourMonthsButton'
    | 'applyButton'

export type SceneFrame = {
    paymentMethodOptions: PaymentMethodOption[]
    panel: InstalmentPanel
    cursor: { target: CursorTarget; isClicking: boolean }
}

export type SceneLayout = SceneBaseLayout<CursorTarget> & {
    body: string
    order: string
    panel: string
    productCard: string
    productPicture: string
    showPaymentLabel: boolean
    showPaymentNotes: boolean
}
