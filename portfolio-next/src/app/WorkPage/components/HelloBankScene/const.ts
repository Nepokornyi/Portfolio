import { PaymentMethod, PaymentMethodId, Product, TermMonths } from './types'

export const TICK_MS = 100
export const LOOP_TICKS = 96
export const HOLD_MS = 3000

// The tick of each event in the story
export const STORY = {
    instalmentsClicked: 12,
    twelveMonthsClicked: 32,
    twentyFourMonthsClicked: 50,
    applyClicked: 68,
    // The check runs from the result of the "Apply" click to this tick
    approved: 84,
}

export const CURSOR_TRAVEL_TICKS = 8
// A click shows as pressed for this many ticks. Then its result shows.
export const PRESS_TICKS = 2
// After a term click, the payment and the total count to the new values over this many ticks
export const PAYMENT_COUNT_TICKS = 6

export const PRODUCT: Product = {
    name: 'Notebook Orbit 14',
    details: 'Silver · 16 GB RAM · 512 GB SSD',
    price: 32_990,
}

// In PAYMENT_METHODS, the order of the keys is the order of the options on the page
export const PAYMENT_METHODS: Record<PaymentMethodId, PaymentMethod> = {
    card: { label: 'Card', note: 'Pay the full price now' },
    instalments: {
        label: 'Instalments with Hello bank!',
        note: 'Split the price into monthly payments',
    },
}

// An example offer, not a real one: the same yearly rate for all terms
export const YEARLY_RATE = 0.099

// In the order of the buttons
export const TERMS: TermMonths[] = [6, 12, 24]
