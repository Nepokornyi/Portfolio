import {
    PaymentMethod,
    PaymentMethodId,
    Product,
    SceneLayout,
    TermMonths,
} from './types'

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

// The cursor positions follow the em sizes of CheckoutWindow, OrderItem, PaymentMethods, and
// InstalmentCalculator, and are measured in a browser render. On desktop, the pointer tip
// (0.27em right of and 0.13em below the position) is beside the label of the target, or below
// the label for the term buttons, so the pointer does not cover a label. On mobile, the tap ring
// is on the centre of the target. If one of these sizes changes, measure the positions again.
export const DESKTOP_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/2]',
    fontSize: '1.8cqw',
    body: 'flex-row',
    order: 'w-[55%] p-[1.6em]',
    panel: 'w-[45%] border-l p-[1.6em]',
    productCard: 'flex-col gap-[0.8em] p-[1em]',
    productPicture: 'h-[10em] p-[0.6em]',
    showPaymentLabel: true,
    showPaymentNotes: true,
    cursor: {
        // Below the payment options, where no text is in any phase
        idle: { x: 28, y: 88.5 },
        instalmentsOption: { x: 34.5, y: 79.8 },
        twelveMonthsButton: { x: 77, y: 21.1 },
        twentyFourMonthsButton: { x: 90.3, y: 21.1 },
        applyButton: { x: 82.5, y: 91.3 },
    },
    showPointer: true,
}

export const MOBILE_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/4]',
    fontSize: '3.6cqw',
    body: 'flex-col',
    order: 'shrink-0 px-[1.2em] py-[0.9em]',
    panel: 'flex-1 border-t px-[1.2em] py-[0.9em]',
    productCard: 'flex-row items-center gap-[0.9em] p-[0.6em]',
    productPicture: 'h-[3.4em] w-[4.4em] shrink-0 p-[0.4em]',
    // Without the payment label and notes, the panel below the order has the height that it needs
    showPaymentLabel: false,
    showPaymentNotes: false,
    cursor: {
        idle: null,
        instalmentsOption: { x: 50, y: 40.7 },
        twelveMonthsButton: { x: 50, y: 57.1 },
        twentyFourMonthsButton: { x: 80.9, y: 57.1 },
        applyButton: { x: 49.5, y: 93.6 },
    },
    showPointer: false,
}
