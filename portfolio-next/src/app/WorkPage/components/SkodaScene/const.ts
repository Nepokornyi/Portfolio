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
    body: 'flex-row scene-stacked:flex-col',
    preview: 'w-[60%] p-[2em] scene-stacked:w-auto scene-stacked:flex-1',
    carArea: '',
    panel: 'w-[40%] border-l p-[1.4em] scene-stacked:w-auto scene-stacked:min-h-[26em] scene-stacked:flex-1 scene-stacked:border-l-0 scene-stacked:border-t scene-stacked:px-[calc((100%-40em)/2)]',
    modelList: 'flex-col gap-[0.4em]',
    modelOption: 'h-[2.6em] items-center justify-between px-[0.8em]',
    summary: 'scene-stacked:justify-center',
    summarySaved: 'mt-auto scene-stacked:mt-[1.6em]',
    idleCursor: { x: 50, y: 84 },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    body: 'flex-col',
    preview:
        'h-[13em] shrink-0 p-[1em] scene-tall:h-auto scene-tall:max-h-[30em] scene-tall:flex-1 scene-tall:justify-center',
    carArea: 'scene-tall:max-h-[11em]',
    panel: 'flex-1 border-t px-[1.2em] pb-[1.2em] pt-[1em]',
    modelList:
        'flex-row gap-[0.5em] scene-tall:flex-col scene-tall:gap-[0.4em]',
    modelOption:
        'h-[3.4em] flex-1 flex-col justify-center px-[0.5em] scene-tall:h-[2.6em] scene-tall:flex-none scene-tall:flex-row scene-tall:items-center scene-tall:justify-between scene-tall:px-[0.8em]',
    summary: 'scene-tall:justify-center',
    summarySaved: 'mt-auto scene-tall:mt-[1.6em]',
    idleCursor: null,
    showPointer: false,
}
