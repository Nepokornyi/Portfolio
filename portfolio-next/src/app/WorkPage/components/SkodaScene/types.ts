import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'
import { IDLE_TARGET } from '@/app/WorkPage/lib/sceneCursor'

export type BodyStyle = 'hatchback' | 'liftback' | 'suv'

export type ModelId = 'fabia' | 'octavia' | 'kodiaq'

export type CarModel = {
    name: string
    bodyStyle: BodyStyle
    price: number
    cursorTarget?: CursorTarget
}

export type PaintId = 'moonWhite' | 'raceBlue' | 'mambaGreen' | 'velvetRed'

export type Paint = {
    name: string
    swatchColor: string
    carColor: string
    surcharge: number
    cursorTarget?: CursorTarget
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
    | typeof IDLE_TARGET
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

export type SceneLayout = SceneBaseLayout & {
    body: string
    preview: string
    carArea: string
    panel: string
    modelList: string
    modelOption: string
    summary: string
    summarySaved: string
}
