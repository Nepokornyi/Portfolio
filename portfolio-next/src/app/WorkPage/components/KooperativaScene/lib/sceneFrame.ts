import {
    BAR_GROW_TICKS,
    BAR_STAGGER_TICKS,
    COUNT_TICKS,
    CURSOR_TRAVEL_TICKS,
    MONTH_RANGE,
    PRESS_TICKS,
    SELECTED_TASK,
    SELECTED_TASK_TIMELINE,
    STAT_TILES,
    STORY,
    TIMELINE_STEP_TICKS,
    WEEK_RANGE,
} from '../const'
import {
    CursorTarget,
    DashboardRange,
    RangePickerState,
    SceneFrame,
    StatId,
    StatTileState,
    TaskRow,
    TimeBucket,
    TimelineState,
} from '../types'
import { formatDuration, formatPercent } from './format'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

const shownAfter = (clickTick: number) => clickTick + PRESS_TICKS

const isPressed = (tick: number, clickTick: number) =>
    tick >= clickTick && tick < shownAfter(clickTick)

const monthLoadStarted = shownAfter(STORY.rangeOptionClicked)
const timelineStarted = shownAfter(STORY.taskClicked)

const getLoadedRange = (tick: number) =>
    tick < monthLoadStarted
        ? { range: WEEK_RANGE, loadStarted: STORY.loadStarted }
        : { range: MONTH_RANGE, loadStarted: monthLoadStarted }

const getRangePicker = (
    tick: number,
    range: DashboardRange,
): RangePickerState => ({
    range: range.label,
    isPressed: isPressed(tick, STORY.rangePickerClicked),
    isMenuOpen:
        tick >= shownAfter(STORY.rangePickerClicked) &&
        tick < monthLoadStarted,
    pressedOption: isPressed(tick, STORY.rangeOptionClicked)
        ? MONTH_RANGE.label
        : null,
})

const formatStatValue = (id: StatId, value: number) => {
    switch (id) {
        case 'leadTime':
        case 'reviewTime':
            return formatDuration(value)
        case 'mergeRequests':
            return String(Math.round(value))
        case 'coverage':
            return formatPercent(value)
    }
}

const getStats = (tick: number): StatTileState[] => {
    const weekProgress = clamp01((tick - STORY.loadStarted) / COUNT_TICKS)
    const monthProgress = clamp01((tick - monthLoadStarted) / COUNT_TICKS)

    return STAT_TILES.map((tile) => {
        const weekValue = WEEK_RANGE.stats[tile.id]
        const monthValue = MONTH_RANGE.stats[tile.id]
        const value =
            weekValue * weekProgress + (monthValue - weekValue) * monthProgress
        return { ...tile, value: formatStatValue(tile.id, value) }
    })
}

const getBars = (
    tick: number,
    range: DashboardRange,
    loadStarted: number,
): TimeBucket[] =>
    range.buckets.map(({ label, hoursByStage }, index) => {
        const growth = clamp01(
            (tick - loadStarted - index * BAR_STAGGER_TICKS) / BAR_GROW_TICKS,
        )
        return {
            label,
            hoursByStage: {
                waiting: hoursByStage.waiting * growth,
                inProgress: hoursByStage.inProgress * growth,
                codeReview: hoursByStage.codeReview * growth,
                testing: hoursByStage.testing * growth,
            },
        }
    })

const getTasks = (tick: number, range: DashboardRange): TaskRow[] =>
    range.tasks.map((task) => {
        const isSelectedTask = task === SELECTED_TASK
        return {
            key: task.key,
            title: task.title,
            leadTime: formatDuration(task.leadTimeHours),
            isSelected: isSelectedTask && tick >= timelineStarted,
            isPressed: isSelectedTask && isPressed(tick, STORY.taskClicked),
        }
    })

const getTimeline = (tick: number): TimelineState | null => {
    if (tick < timelineStarted) return null

    const shownEvents =
        Math.floor((tick - timelineStarted) / TIMELINE_STEP_TICKS) + 1

    return {
        taskKey: SELECTED_TASK.key,
        taskTitle: SELECTED_TASK.title,
        events: SELECTED_TASK_TIMELINE.map(
            ({ label, source, hoursAfterPrevious }, index) => ({
                label,
                source,
                duration:
                    hoursAfterPrevious === null
                        ? null
                        : formatDuration(hoursAfterPrevious),
                isShown: index < shownEvents,
            }),
        ),
        total:
            shownEvents > SELECTED_TASK_TIMELINE.length
                ? formatDuration(SELECTED_TASK.leadTimeHours)
                : null,
    }
}

const getCursorTarget = (tick: number): CursorTarget => {
    const leaveFor = (clickTick: number) => clickTick - CURSOR_TRAVEL_TICKS
    if (tick < leaveFor(STORY.rangePickerClicked)) return 'idle'
    if (tick < leaveFor(STORY.rangeOptionClicked)) return 'rangePicker'
    if (tick < leaveFor(STORY.taskClicked)) return 'rangeOption'
    if (tick < STORY.taskClicked + CURSOR_TRAVEL_TICKS) return 'taskRow'
    return 'idle'
}

const CLICK_TICKS = [
    STORY.rangePickerClicked,
    STORY.rangeOptionClicked,
    STORY.taskClicked,
]

const isCursorDown = (tick: number) =>
    CLICK_TICKS.some((clickTick) => isPressed(tick, clickTick))

export const getSceneFrame = (tick: number): SceneFrame => {
    const { range, loadStarted } = getLoadedRange(tick)

    return {
        rangePicker: getRangePicker(tick, range),
        stats: getStats(tick),
        bars: getBars(tick, range, loadStarted),
        tasks: getTasks(tick, range),
        timeline: getTimeline(tick),
        cursor: {
            target: getCursorTarget(tick),
            isClicking: isCursorDown(tick),
        },
    }
}
