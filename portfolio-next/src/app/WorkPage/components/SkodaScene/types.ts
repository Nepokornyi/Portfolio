import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'

export type BodyStyle = 'hatchback' | 'liftback' | 'suv'

export type ModelId = 'fabia' | 'octavia' | 'kodiaq'

export type CarModel = {
    name: string
    bodyStyle: BodyStyle
    price: number
}

export type PaintId = 'moonWhite' | 'raceBlue' | 'mambaGreen' | 'velvetRed'

export type Paint = {
    name: string
    swatchColor: string
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
    model: CarModel
    paint: Paint
    modelOptions: ModelOption[]
    paintOptions: PaintOption[]
    total: number
    isContinuePressed: boolean
    isSummaryShown: boolean
    cursor: SceneCursorState<CursorTarget>
}

export type SceneLayout = SceneBaseLayout<CursorTarget> & {
    body: string
    preview: string
    panel: string
    modelList: string
    modelOption: string
}
