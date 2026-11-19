import { CarModel, ModelId, Paint, PaintId, SceneLayout } from './types'

export const TICK_MS = 100
export const LOOP_TICKS = 86
export const HOLD_MS = 3000

export const STORY = {
    octaviaClicked: 12,
    raceBlueClicked: 32,
    mambaGreenClicked: 52,
    continueClicked: 72,
}

export const CURSOR_TRAVEL_TICKS = 8
export const PRESS_TICKS = 2
export const TOTAL_COUNT_TICKS = 6

export const MODELS: Record<ModelId, CarModel> = {
    fabia: { name: 'Fabia', bodyStyle: 'hatchback', price: 399_900 },
    octavia: {
        name: 'Octavia',
        bodyStyle: 'liftback',
        price: 639_900,
        cursorTarget: 'octaviaOption',
    },
    kodiaq: { name: 'Kodiaq', bodyStyle: 'suv', price: 1_049_900 },
}

export const PAINTS: Record<PaintId, Paint> = {
    moonWhite: {
        name: 'Moon White',
        swatchColor: 'bg-primary-text',
        carColor: 'text-primary-text',
        surcharge: 0,
    },
    raceBlue: {
        name: 'Race Blue',
        swatchColor: 'bg-primary-blue',
        carColor: 'text-primary-blue',
        surcharge: 12_000,
        cursorTarget: 'raceBlueSwatch',
    },
    mambaGreen: {
        name: 'Mamba Green',
        swatchColor: 'bg-primary-light-green',
        carColor: 'text-primary-light-green',
        surcharge: 18_000,
        cursorTarget: 'mambaGreenSwatch',
    },
    velvetRed: {
        name: 'Velvet Red',
        swatchColor: 'bg-secondary-red',
        carColor: 'text-secondary-red',
        surcharge: 24_000,
    },
}

export const LANDSCAPE_LAYOUT: SceneLayout = {
    body: 'flex-row [@container(max-aspect-ratio:1.2)]:flex-col',
    preview:
        'w-[60%] p-[2em] [@container(max-aspect-ratio:1.2)]:w-auto [@container(max-aspect-ratio:1.2)]:flex-1',
    carArea: '',
    panel: 'w-[40%] border-l p-[1.4em] [@container(max-aspect-ratio:1.2)]:w-auto [@container(max-aspect-ratio:1.2)]:min-h-[26em] [@container(max-aspect-ratio:1.2)]:flex-1 [@container(max-aspect-ratio:1.2)]:border-l-0 [@container(max-aspect-ratio:1.2)]:border-t [@container(max-aspect-ratio:1.2)]:px-[max(1.4em,calc((100%-40em)/2))]',
    modelList: 'flex-col gap-[0.4em]',
    modelOption: 'h-[2.6em] items-center justify-between px-[0.8em]',
    summary: '[@container(max-aspect-ratio:1.2)]:justify-center',
    summarySaved: 'mt-auto [@container(max-aspect-ratio:1.2)]:mt-[1.6em]',
    idleCursor: { x: 50, y: 84 },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    body: 'flex-col',
    preview:
        'h-[13em] shrink-0 p-[1em] [@container(max-aspect-ratio:0.6)]:h-auto [@container(max-aspect-ratio:0.6)]:max-h-[30em] [@container(max-aspect-ratio:0.6)]:flex-1 [@container(max-aspect-ratio:0.6)]:justify-center',
    carArea: '[@container(max-aspect-ratio:0.6)]:max-h-[11em]',
    panel: 'flex-1 border-t px-[1.2em] pb-[1.2em] pt-[1em]',
    modelList:
        'flex-row gap-[0.5em] [@container(max-aspect-ratio:0.6)]:flex-col [@container(max-aspect-ratio:0.6)]:gap-[0.4em]',
    modelOption:
        'h-[3.4em] flex-1 flex-col justify-center px-[0.5em] [@container(max-aspect-ratio:0.6)]:h-[2.6em] [@container(max-aspect-ratio:0.6)]:flex-none [@container(max-aspect-ratio:0.6)]:flex-row [@container(max-aspect-ratio:0.6)]:items-center [@container(max-aspect-ratio:0.6)]:justify-between [@container(max-aspect-ratio:0.6)]:px-[0.8em]',
    summary: '[@container(max-aspect-ratio:0.6)]:justify-center',
    summarySaved: 'mt-auto [@container(max-aspect-ratio:0.6)]:mt-[1.6em]',
    idleCursor: null,
    showPointer: false,
}
