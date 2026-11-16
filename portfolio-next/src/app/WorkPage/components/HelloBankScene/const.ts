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
