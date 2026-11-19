import {
    SceneBaseLayout,
    SceneCursorState,
} from '@/app/WorkPage/components/SceneCanvas'
import { IDLE_TARGET } from '@/app/WorkPage/lib/sceneCursor'

export type SourceId = 'jira' | 'gitlab' | 'sonarqube'

export type Source = {
    name: string
    color: string
}

type StageId = 'waiting' | 'inProgress' | 'codeReview' | 'testing'

export type Stage = {
    id: StageId
    label: string
    color: string
}

export type StatId = 'leadTime' | 'reviewTime' | 'mergeRequests' | 'coverage'

export type StatTile = {
    id: StatId
    label: string
    detail: string
    source: SourceId
}

export type TimeBucket = {
    label: string
    hoursByStage: Record<StageId, number>
}

export type Task = {
    key: string
    title: string
    leadTimeHours: number
    cursorTarget?: CursorTarget
}

export type DashboardRange = {
    label: string
    stats: Record<StatId, number>
    buckets: TimeBucket[]
    tasks: Task[]
}

export type RangeOption = {
    label: string
    cursorTarget?: CursorTarget
}

export type TimelineEvent = {
    label: string
    source: SourceId
    hoursAfterPrevious: number | null
}

export type RangePickerState = {
    range: string
    isPressed: boolean
    isMenuOpen: boolean
    pressedOption: string | null
}

export type StatTileState = StatTile & {
    value: string
}

export type TaskRow = {
    key: string
    title: string
    leadTime: string
    cursorTarget?: CursorTarget
    isSelected: boolean
    isPressed: boolean
}

export type TimelineEventState = {
    label: string
    source: SourceId
    duration: string | null
    isShown: boolean
}

export type TimelineState = {
    taskKey: string
    taskTitle: string
    events: TimelineEventState[]
    total: string | null
}

export type CursorTarget =
    | typeof IDLE_TARGET
    | 'rangePicker'
    | 'rangeOption'
    | 'taskRow'

export type SceneFrame = {
    rangePicker: RangePickerState
    stats: StatTileState[]
    bars: TimeBucket[]
    tasks: TaskRow[]
    timeline: TimelineState | null
    cursor: SceneCursorState<CursorTarget>
}

export type SceneLayout = SceneBaseLayout & {
    page: string
    panelPadding: string
    showSources: boolean
    statGrid: string
    statDetail: string
    extraStatTile: string
    middle: string
    tasksPanel: string
    tasksPanelAfterSelection: string
    taskRow: string
    timeline: 'steps' | 'list'
    timelinePanel: string
    timelinePanelBeforeSelection: string
}
