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
    body: 'flex-row [@container(max-aspect-ratio:1.1)]:flex-col',
    order: 'w-[55%] p-[1.6em] [@container(max-aspect-ratio:1.1)]:w-auto [@container(max-aspect-ratio:1.1)]:grow-[7] [@container(max-aspect-ratio:1.1)]:basis-0 [@container(max-aspect-ratio:1.1)]:px-[max(1.6em,calc((100%-40em)/2))]',
    panel: 'w-[45%] border-l p-[1.6em] [@container(max-aspect-ratio:1.1)]:w-auto [@container(max-aspect-ratio:1.1)]:grow-[5] [@container(max-aspect-ratio:1.1)]:basis-0 [@container(max-aspect-ratio:1.1)]:border-l-0 [@container(max-aspect-ratio:1.1)]:border-t [@container(max-aspect-ratio:1.1)]:px-[max(1.6em,calc((100%-40em)/2))]',
    productCard:
        'flex-col gap-[0.8em] p-[1em] [@container(max-aspect-ratio:1.4)]:grow',
    productPicture:
        'h-[10em] max-h-[16em] p-[0.6em] [@container(max-aspect-ratio:1.4)]:h-auto [@container(max-aspect-ratio:1.4)]:min-h-[7em] [@container(max-aspect-ratio:1.4)]:basis-[7em] [@container(max-aspect-ratio:1.4)]:grow [@container(max-aspect-ratio:1.1)]:max-h-[19em]',
    productDetails: '',
    paymentLabel: '',
    paymentMethods:
        'mt-[0.5em] [@container(max-aspect-ratio:1.1)]:grid [@container(max-aspect-ratio:1.1)]:grid-cols-2',
    paymentNote: '',
    idleCursor: { x: 92, y: 34 },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    body: 'flex-col',
    order: 'shrink-0 px-[1.2em] py-[0.9em] [@container(max-aspect-ratio:0.6)]:flex-1',
    panel: 'flex-1 border-t px-[1.2em] py-[0.9em]',
    productCard:
        'flex-row items-center gap-[0.9em] p-[0.6em] [@container(max-aspect-ratio:0.6)]:grow [@container(max-aspect-ratio:0.6)]:flex-col [@container(max-aspect-ratio:0.6)]:items-stretch [@container(max-aspect-ratio:0.6)]:gap-[0.8em] [@container(max-aspect-ratio:0.6)]:p-[1em]',
    productPicture:
        'h-[3.4em] w-[4.4em] shrink-0 p-[0.4em] [@container(max-aspect-ratio:0.6)]:h-auto [@container(max-aspect-ratio:0.6)]:w-auto [@container(max-aspect-ratio:0.6)]:min-h-[7em] [@container(max-aspect-ratio:0.6)]:max-h-[16em] [@container(max-aspect-ratio:0.6)]:basis-[7em] [@container(max-aspect-ratio:0.6)]:grow [@container(max-aspect-ratio:0.6)]:p-[0.6em]',
    productDetails: 'flex-1 [@container(max-aspect-ratio:0.6)]:flex-none',
    paymentLabel: '[@container(min-aspect-ratio:0.6)]:hidden',
    paymentMethods: 'mt-[0.8em] [@container(max-aspect-ratio:0.6)]:mt-[0.5em]',
    paymentNote: '[@container(min-aspect-ratio:0.6)]:hidden',
    idleCursor: null,
    showPointer: false,
}
