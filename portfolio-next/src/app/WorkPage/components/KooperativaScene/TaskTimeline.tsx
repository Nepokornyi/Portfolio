import { Rectangle } from '@/components/Rectangle/Rectangle'
import { DashboardPanel } from './DashboardPanel'
import { SOURCES } from './const'
import { TimelineEventState, TimelineState } from './types'

// An event that is not shown yet keeps its space, so the timeline does not move when it shows
const shownClass = (isShown: boolean) =>
    isShown ? 'motion-safe:animate-fade-in-up' : 'invisible'

// The line to an event paints after the mark of the event before, so the marks have a z-index
const MARK_CLASS = 'relative z-10 shrink-0'

// Desktop: the events in a row, with the time between two events on the line that joins them
const TimelineSteps = ({ events }: { events: TimelineEventState[] }) => (
    <ol className="grid min-w-0 flex-1 grid-cols-6">
        {events.map(({ label, source, duration, isShown }) => (
            <li
                key={label}
                className={`relative flex flex-col items-center px-[0.3em] text-center ${shownClass(isShown)}`}
            >
                {duration && (
                    <>
                        <span className="absolute right-1/2 top-[2.05em] h-px w-full bg-white/30" />
                        <span className="absolute left-0 top-0 -translate-x-1/2 whitespace-nowrap text-[0.75em] leading-[1.4] tabular-nums text-white">
                            {duration}
                        </span>
                    </>
                )}
                <Rectangle
                    variant="small"
                    className={`${MARK_CLASS} mt-[1.7em] size-[0.7em] ${SOURCES[source].color}`}
                />
                <span className="mt-[0.6em] text-[0.75em] leading-tight text-white">
                    {label}
                </span>
                <span className="mt-[0.2em] text-[0.7em] text-white/40">
                    {SOURCES[source].name}
                </span>
            </li>
        ))}
    </ol>
)

// Mobile: the events from top to bottom, each with the time since the event before it
const TimelineList = ({ events }: { events: TimelineEventState[] }) => (
    <ol className="flex shrink-0 flex-col">
        {events.map(({ label, source, duration, isShown }) => (
            <li
                key={label}
                className={`relative flex h-[1.3em] shrink-0 items-center gap-[0.6em] ${shownClass(isShown)}`}
            >
                {duration && (
                    <span className="absolute bottom-1/2 left-[0.35em] h-full w-px bg-white/30" />
                )}
                <Rectangle
                    variant="small"
                    className={`${MARK_CLASS} size-[0.6em] ${SOURCES[source].color}`}
                />
                <span className="min-w-0 flex-1 truncate text-[0.75em] text-white">
                    {label}
                </span>
                <span className="shrink-0 text-[0.7em] text-white/40">
                    {SOURCES[source].name}
                </span>
                <span className="w-[5.2em] shrink-0 text-right text-[0.75em] tabular-nums text-white">
                    {duration && `+${duration}`}
                </span>
            </li>
        ))}
    </ol>
)

const TotalLeadTime = ({
    total,
    className = '',
}: {
    total: string | null
    className?: string
}) => (
    // The box keeps its space before the total shows
    <div className={`flex shrink-0 ${className}`}>
        {total && (
            <div className="flex flex-1 flex-wrap content-center items-center justify-between gap-x-[0.6em] motion-safe:animate-fade-in-up">
                <span className="text-[0.75em] text-white/60">
                    Total lead time
                </span>
                <span className="whitespace-nowrap text-[1.3em] font-bold text-white">
                    {total}
                </span>
            </div>
        )}
    </div>
)

type TaskTimelineProps = {
    timeline: TimelineState | null
    variant: 'steps' | 'list'
    // The padding of the panel, from the layout
    className?: string
}

export const TaskTimeline = ({
    timeline,
    variant,
    className = '',
}: TaskTimelineProps) => (
    <DashboardPanel
        title={
            <>
                Task timeline
                {timeline && (
                    <span className="font-normal text-white/60">
                        {' '}
                        · {timeline.taskKey} {timeline.taskTitle}
                    </span>
                )}
            </>
        }
        className={`shrink-0 ${className}`}
    >
        {/* The two views have different keys, so the events mount as a new element and the fade plays */}
        {timeline ? (
            <div
                key="events"
                className={`mt-[0.4em] flex ${
                    variant === 'steps' ? 'flex-row gap-[0.8em]' : 'flex-col'
                }`}
            >
                {variant === 'steps' ? (
                    <TimelineSteps events={timeline.events} />
                ) : (
                    <TimelineList events={timeline.events} />
                )}
                <TotalLeadTime
                    total={timeline.total}
                    className={
                        variant === 'steps'
                            ? 'w-[8.5em] border-l border-primary-hairline pl-[0.8em]'
                            : 'mt-[0.3em] h-[1.8em] border-t border-primary-hairline'
                    }
                />
            </div>
        ) : (
            <div
                key="empty"
                className="mt-[0.4em] flex flex-1 items-center justify-center text-[0.75em] text-white/40"
            >
                Select a task to see where its time went
            </div>
        )}
    </DashboardPanel>
)
