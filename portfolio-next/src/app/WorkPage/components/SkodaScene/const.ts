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
    octavia: { name: 'Octavia', bodyStyle: 'liftback', price: 639_900 },
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
    },
    mambaGreen: {
        name: 'Mamba Green',
        swatchColor: 'bg-primary-light-green',
        carColor: 'text-primary-light-green',
        surcharge: 18_000,
    },
    velvetRed: {
        name: 'Velvet Red',
        swatchColor: 'bg-secondary-red',
        carColor: 'text-secondary-red',
        surcharge: 24_000,
    },
}

export const LANDSCAPE_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/2]',
    fontSize: '1.8cqw',
    body: 'flex-row',
    preview: 'w-[60%] p-[2em]',
    panel: 'w-[40%] border-l p-[1.4em]',
    modelList: 'flex-col gap-[0.4em]',
    modelOption: 'h-[2.6em] items-center justify-between px-[0.8em]',
    cursor: {
        idle: { x: 50, y: 84 },
        octaviaOption: { x: 79.5, y: 26.3 },
        raceBlueSwatch: { x: 70.1, y: 48.4 },
        mambaGreenSwatch: { x: 75.8, y: 48.4 },
        continueButton: { x: 89.9, y: 91.9 },
    },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    aspect: 'aspect-[3/4]',
    fontSize: '3.6cqw',
    body: 'flex-col',
    preview: 'h-[13em] shrink-0 p-[1em]',
    panel: 'flex-1 border-t px-[1.2em] pb-[1.2em] pt-[1em]',
    modelList: 'flex-row gap-[0.5em]',
    modelOption: 'h-[3.4em] flex-1 flex-col justify-center px-[0.5em]',
    cursor: {
        idle: null,
        octaviaOption: { x: 50, y: 53.9 },
        raceBlueSwatch: { x: 20.4, y: 69 },
        mambaGreenSwatch: { x: 31.9, y: 69 },
        continueButton: { x: 49.5, y: 92.8 },
    },
    showPointer: false,
}
