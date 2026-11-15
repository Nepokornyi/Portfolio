import { CarModel, ModelId, Paint, PaintId } from './types'

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
