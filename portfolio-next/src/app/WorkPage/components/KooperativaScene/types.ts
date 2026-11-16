import { SceneBaseLayout } from '@/app/WorkPage/components/SceneBrowserWindow'

export type SourceId = 'jira' | 'gitlab' | 'sonarqube'

export type Source = {
    name: string
    color: string
}

export type StageId = 'waiting' | 'inProgress' | 'codeReview' | 'testing'

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
}

export type DashboardRange = {
    label: string
    stats: Record<StatId, number>
    buckets: TimeBucket[]
    tasks: Task[]
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

export type CursorTarget = 'idle' | 'rangePicker' | 'rangeOption' | 'taskRow'

export type SceneFrame = {
    rangePicker: RangePickerState
    stats: StatTileState[]
    bars: TimeBucket[]
    tasks: TaskRow[]
    timeline: TimelineState | null
    cursor: { target: CursorTarget; isClicking: boolean }
}

export type SceneLayout = SceneBaseLayout<CursorTarget> & {
    body: string
    panel: string
    showSources: boolean
    statIds: StatId[]
    statGrid: string
    showStatDetail: boolean
    middle: string
    tasksPanel: string
    taskRows: number
    timeline: 'steps' | 'list'
    timelinePanel: string
    timelineReplacesTasks: boolean
}
