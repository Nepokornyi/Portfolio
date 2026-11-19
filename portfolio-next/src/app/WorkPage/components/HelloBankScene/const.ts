import {
    PaymentMethod,
    PaymentMethodId,
    Product,
    SceneLayout,
    Term,
} from './types'

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
        cursorTarget: 'instalmentsOption',
    },
}

export const YEARLY_RATE = 0.099

export const TERMS: Term[] = [
    { months: 6 },
    { months: 12, cursorTarget: 'twelveMonthsButton' },
    { months: 24, cursorTarget: 'twentyFourMonthsButton' },
]

export const LANDSCAPE_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/2]',
    fontSize: '1.8cqw',
    body: 'flex-row',
    order: 'w-[55%] p-[1.6em]',
    panel: 'w-[45%] border-l p-[1.6em]',
    productCard: 'flex-col gap-[0.8em] p-[1em]',
    productPicture: 'h-[10em] p-[0.6em]',
    showPaymentLabel: true,
    showPaymentNotes: true,
    idleCursor: { x: 28, y: 88.5 },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/4]',
    fontSize: '3.6cqw',
    body: 'flex-col',
    order: 'shrink-0 px-[1.2em] py-[0.9em]',
    panel: 'flex-1 border-t px-[1.2em] py-[0.9em]',
    productCard: 'flex-row items-center gap-[0.9em] p-[0.6em]',
    productPicture: 'h-[3.4em] w-[4.4em] shrink-0 p-[0.4em]',
    showPaymentLabel: false,
    showPaymentNotes: false,
    idleCursor: null,
    showPointer: false,
}
