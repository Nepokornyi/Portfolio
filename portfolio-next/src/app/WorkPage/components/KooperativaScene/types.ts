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
    // What the value measures, for example "Median, created → resolved"
    detail: string
    source: SourceId
}

// One bar of the chart: the tasks that were resolved in one time bucket
export type TimeBucket = {
    label: string
    // The average hours that these tasks spent in each stage
    hoursByStage: Record<StageId, number>
}

export type Task = {
    key: string
    title: string
    leadTimeHours: number
}

// The data of the dashboard for one time range
export type DashboardRange = {
    label: string
    // Lead time and review time in hours, coverage in percent
    stats: Record<StatId, number>
    buckets: TimeBucket[]
    // The slowest task first
    tasks: Task[]
}

export type TimelineEvent = {
    label: string
    source: SourceId
    // The first event has no event before it
    hoursAfterPrevious: number | null
}

export type RangePickerState = {
    // The label of the range that the dashboard shows, for example "Last 7 days"
    range: string
    isPressed: boolean
    isMenuOpen: boolean
    // The label of the menu option that shows as pressed
    pressedOption: string | null
}

export type StatTileState = StatTile & {
    // For example "3 d 6 h". It counts to the new value when a range loads.
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
    // The time since the event before, for example "3 d 1 h"
    duration: string | null
    isShown: boolean
}

export type TimelineState = {
    // The task that the timeline describes, for the heading of the panel
    taskKey: string
    taskTitle: string
    events: TimelineEventState[]
    // The lead time of the task. It shows after the last event.
    total: string | null
}

export type CursorTarget = 'idle' | 'rangePicker' | 'rangeOption' | 'taskRow'

export type SceneFrame = {
    rangePicker: RangePickerState
    stats: StatTileState[]
    // The hours grow from zero when a range loads
    bars: TimeBucket[]
    tasks: TaskRow[]
    // null until the user selects a task
    timeline: TimelineState | null
    cursor: { target: CursorTarget; isClicking: boolean }
}
