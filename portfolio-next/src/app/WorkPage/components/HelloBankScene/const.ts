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
    body: 'flex-row scene-stacked:flex-col',
    order: 'w-[55%] p-[1.6em] scene-stacked:w-auto scene-stacked:grow-[7] scene-stacked:basis-0 scene-stacked:px-[calc((100%-40em)/2)]',
    panel: 'w-[45%] border-l p-[1.6em] scene-stacked:w-auto scene-stacked:grow-[5] scene-stacked:basis-0 scene-stacked:border-l-0 scene-stacked:border-t scene-stacked:px-[calc((100%-40em)/2)]',
    productCard: 'flex-col gap-[0.8em] p-[1em] scene-roomy:grow',
    productPicture:
        'h-[10em] max-h-[16em] p-[0.6em] scene-roomy:h-auto scene-roomy:min-h-[7em] scene-roomy:basis-[7em] scene-roomy:grow scene-stacked:max-h-[19em]',
    productDetails: '',
    paymentLabel: '',
    paymentMethods:
        'mt-[0.5em] scene-stacked:grid scene-stacked:grid-cols-2',
    paymentNote: '',
    idleCursor: { x: 92, y: 34 },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    body: 'flex-col',
    order: 'shrink-0 px-[1.2em] py-[0.9em] scene-tall:min-h-fit scene-tall:flex-1',
    panel: 'flex-1 border-t px-[1.2em] py-[0.9em]',
    productCard:
        'flex-row items-center gap-[0.9em] p-[0.6em] scene-tall:grow scene-tall:flex-col scene-tall:items-stretch scene-tall:gap-[0.8em] scene-tall:p-[1em]',
    productPicture:
        'h-[3.4em] w-[4.4em] shrink-0 p-[0.4em] scene-tall:h-auto scene-tall:w-auto scene-tall:min-h-[7em] scene-tall:max-h-[16em] scene-tall:basis-[7em] scene-tall:grow scene-tall:p-[0.6em]',
    productDetails: 'flex-1 scene-tall:flex-none',
    paymentLabel: 'hidden scene-tall:block',
    paymentMethods: 'mt-[0.8em] scene-tall:mt-[0.5em]',
    paymentNote: 'hidden scene-tall:block',
    idleCursor: null,
    showPointer: false,
}
