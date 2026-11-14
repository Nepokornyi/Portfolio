import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'

export type BodyStyle = 'hatchback' | 'liftback' | 'suv'

export type ModelId = 'fabia' | 'octavia' | 'kodiaq'

export type CarModel = {
    name: string
    // Selects the silhouette that the car preview draws
    bodyStyle: BodyStyle
    // The "from" price, without the paint surcharge
    price: number
}

export type PaintId = 'moonWhite' | 'raceBlue' | 'mambaGreen' | 'velvetRed'

export type Paint = {
    name: string
    // The fill of the swatch, for example 'bg-primary-blue'
    swatchColor: string
    // The colour of the car line art, for example 'text-primary-blue'. The SVG draws with currentColor.
    carColor: string
    surcharge: number
}

export type ModelOption = CarModel & {
    isSelected: boolean
    isPressed: boolean
}

export type PaintOption = Paint & {
    isSelected: boolean
    isPressed: boolean
}

export type CursorTarget =
    | 'idle'
    | 'octaviaOption'
    | 'raceBlueSwatch'
    | 'mambaGreenSwatch'
    | 'continueButton'

export type SceneFrame = {
    // The selected model and paint. The car preview and the colour block show them.
    model: CarModel
    paint: Paint
    modelOptions: ModelOption[]
    paintOptions: PaintOption[]
    // After each choice, the total counts to the new price over a few ticks
    total: number
    isContinuePressed: boolean
    // After "Continue", the summary replaces the options
    isSummaryShown: boolean
    cursor: SceneCursorState<CursorTarget>
}

export type SceneLayout = SceneBaseLayout<CursorTarget> & {
    // The car preview and the options panel side by side, or the car above the options
    body: string
    preview: string
    panel: string
    // The model options as a list of rows, or as cards in one row
    modelList: string
    modelOption: string
}
