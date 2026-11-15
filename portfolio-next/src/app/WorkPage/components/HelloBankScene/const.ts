import { PaymentMethod, PaymentMethodId, Product, TermMonths } from './types'

export const TICK_MS = 100
export const LOOP_TICKS = 96
export const HOLD_MS = 3000

export const STORY = {
    instalmentsClicked: 12,
    twelveMonthsClicked: 32,
    twentyFourMonthsClicked: 50,
    applyClicked: 68,
    approved: 84,
}

export const CURSOR_TRAVEL_TICKS = 8
export const PRESS_TICKS = 2
export const PAYMENT_COUNT_TICKS = 6

export const PRODUCT: Product = {
    name: 'Notebook Orbit 14',
    details: 'Silver · 16 GB RAM · 512 GB SSD',
    price: 32_990,
}

export const PAYMENT_METHODS: Record<PaymentMethodId, PaymentMethod> = {
    card: { label: 'Card', note: 'Pay the full price now' },
    instalments: {
        label: 'Instalments with Hello bank!',
        note: 'Split the price into monthly payments',
    },
}

export const YEARLY_RATE = 0.099

export const TERMS: TermMonths[] = [6, 12, 24]
