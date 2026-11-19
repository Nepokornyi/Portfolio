import {
    DashboardRange,
    RangeOption,
    SceneLayout,
    Source,
    SourceId,
    Stage,
    StatId,
    StatTile,
    Task,
    TimeBucket,
    TimelineEvent,
} from './types'

export const TICK_MS = 100
export const LOOP_TICKS = 100
export const HOLD_MS = 3000

export const STORY = {
    loadStarted: 2,
    rangePickerClicked: 26,
    rangeOptionClicked: 38,
    taskClicked: 60,
}

export const CURSOR_TRAVEL_TICKS = 8
export const PRESS_TICKS = 2
export const COUNT_TICKS = 8
export const BAR_GROW_TICKS = 6
export const BAR_STAGGER_TICKS = 1
export const TIMELINE_STEP_TICKS = 5

export const SOURCES: Record<SourceId, Source> = {
    jira: { name: 'Jira', color: 'bg-secondary-linkedin' },
    gitlab: { name: 'GitLab', color: 'bg-secondary-github' },
    sonarqube: { name: 'SonarQube', color: 'bg-primary-dark-blue' },
}

export const STAGES: Stage[] = [
    { id: 'waiting', label: 'Waiting', color: 'bg-primary-blue' },
    { id: 'inProgress', label: 'In progress', color: 'bg-primary-highlight' },
    { id: 'codeReview', label: 'Code review', color: 'bg-secondary-discord' },
    { id: 'testing', label: 'Testing', color: 'bg-primary-light-green' },
]

export const STAT_TILES: StatTile[] = [
    {
        id: 'leadTime',
        label: 'Lead time',
        detail: 'Median, created → resolved',
        source: 'jira',
    },
    {
        id: 'reviewTime',
        label: 'Review time',
        detail: 'Median, opened → merged',
        source: 'gitlab',
    },
    {
        id: 'mergeRequests',
        label: 'Merge requests',
        detail: 'Merged',
        source: 'gitlab',
    },
    {
        id: 'coverage',
        label: 'Coverage',
        detail: 'Lines covered by tests',
        source: 'sonarqube',
    },
]

export const ALWAYS_SHOWN_STAT_IDS: StatId[] = ['leadTime', 'reviewTime']

export const CHART_MAX_HOURS = 144

export const SELECTED_TASK_TIMELINE: TimelineEvent[] = [
    {
        label: 'Created',
        source: 'jira',
        hoursAfterPrevious: null,
    },
    {
        label: 'In progress',
        source: 'jira',
        hoursAfterPrevious: 102,
    },
    {
        label: 'Merge request opened',
        source: 'gitlab',
        hoursAfterPrevious: 73,
    },
    {
        label: 'Quality gate passed',
        source: 'sonarqube',
        hoursAfterPrevious: 2,
    },
    {
        label: 'Merged',
        source: 'gitlab',
        hoursAfterPrevious: 49,
    },
    {
        label: 'Resolved',
        source: 'jira',
        hoursAfterPrevious: 43,
    },
]

export const SELECTED_TASK: Task = {
    key: 'DEV-1482',
    title: 'Paginate the audit log API',
    leadTimeHours: SELECTED_TASK_TIMELINE.reduce(
        (sum, event) => sum + (event.hoursAfterPrevious ?? 0),
        0,
    ),
    cursorTarget: 'taskRow',
}

const bucket = (
    label: string,
    waiting: number,
    inProgress: number,
    codeReview: number,
    testing: number,
): TimeBucket => ({
    label,
    hoursByStage: { waiting, inProgress, codeReview, testing },
})

export const WEEK_RANGE: DashboardRange = {
    label: 'Last 7 days',
    stats: {
        leadTime: 78,
        reviewTime: 9.5,
        mergeRequests: 38,
        coverage: 81.4,
    },
    buckets: [
        bucket('Mon', 38, 27, 12, 9),
        bucket('Tue', 44, 25, 14, 10),
        bucket('Wed', 33, 29, 10, 8),
        bucket('Thu', 41, 31, 13, 11),
        bucket('Fri', 36, 24, 11, 7),
        bucket('Sat', 30, 22, 9, 6),
        bucket('Sun', 35, 26, 12, 9),
    ],
    tasks: [
        {
            key: 'DEV-1517',
            title: 'Add retries to file uploads',
            leadTimeHours: 195,
        },
        {
            key: 'DEV-1503',
            title: 'Fix the flaky login test',
            leadTimeHours: 164,
        },
        {
            key: 'DEV-1526',
            title: 'Update the date picker',
            leadTimeHours: 129,
        },
        {
            key: 'DEV-1494',
            title: 'Cache the settings query',
            leadTimeHours: 118,
        },
    ],
}

export const MONTH_RANGE: DashboardRange = {
    label: 'Last 30 days',
    stats: {
        leadTime: 98,
        reviewTime: 13.5,
        mergeRequests: 164,
        coverage: 80.6,
    },
    buckets: [
        bucket('W42', 47, 30, 16, 11),
        bucket('W43', 52, 33, 18, 12),
        bucket('W44', 44, 28, 15, 10),
        bucket('W45', 49, 31, 17, 13),
        bucket('W46', 37, 27, 12, 9),
    ],
    tasks: [
        SELECTED_TASK,
        {
            key: 'DEV-1455',
            title: 'Move the build to Node 22',
            leadTimeHours: 242,
        },
        {
            key: 'DEV-1517',
            title: 'Add retries to file uploads',
            leadTimeHours: 195,
        },
        {
            key: 'DEV-1469',
            title: 'Split the settings page',
            leadTimeHours: 183,
        },
    ],
}

export const RANGE_OPTIONS: RangeOption[] = [
    { label: WEEK_RANGE.label },
    { label: MONTH_RANGE.label, cursorTarget: 'rangeOption' },
    { label: 'Last 90 days' },
]

export const LANDSCAPE_LAYOUT: SceneLayout = {
    page: 'gap-[0.7em] p-[0.9em]',
    panelPadding: 'px-[0.8em] py-[0.6em]',
    showSources: true,
    statGrid: 'grid-cols-4 gap-[0.7em]',
    statDetail: '',
    extraStatTile: '',
    middle: 'flex-row gap-[0.7em] scene-stacked:flex-col',
    tasksPanel: 'w-[42%] shrink-0 scene-stacked:w-auto',
    tasksPanelAfterSelection: '',
    taskRow: 'min-h-[1.9em] max-h-[3em] scene-roomy:flex-1',
    timeline: 'steps',
    timelinePanel: 'h-[8.6em]',
    timelinePanelBeforeSelection: '',
    idleCursor: { x: 80, y: 63 },
    showPointer: true,
}

export const PORTRAIT_LAYOUT: SceneLayout = {
    page: 'gap-[0.5em] p-[0.6em]',
    panelPadding: 'px-[0.6em] py-[0.4em]',
    showSources: false,
    statGrid: 'grid-cols-2 gap-[0.5em]',
    statDetail: 'hidden scene-very-tall:block',
    extraStatTile: 'hidden scene-very-tall:flex',
    middle: 'flex-col gap-[0.5em]',
    tasksPanel: 'h-[12.7em] shrink-0',
    tasksPanelAfterSelection: 'hidden scene-very-tall:flex',
    taskRow: 'h-[1.9em]',
    timeline: 'list',
    timelinePanel: 'h-[12.7em]',
    timelinePanelBeforeSelection: 'hidden scene-very-tall:flex',
    idleCursor: null,
    showPointer: false,
}
