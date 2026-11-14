import { DashboardPanel } from './DashboardPanel'
import { TaskRow } from './types'

const rowStateClass = ({ isSelected, isPressed }: TaskRow) => {
    if (isPressed) return 'bg-white/10'
    if (isSelected)
        return 'bg-white/5 shadow-[inset_0.2em_0_0_var(--color-primary-stroke)]'
    return ''
}

type SlowestTasksProps = {
    tasks: TaskRow[]
    // The label of the range. The rows mount again for each range, so the fade plays on the refresh.
    range: string
    // The size and the padding of the panel, from the layout
    className?: string
}

export const SlowestTasks = ({
    tasks,
    range,
    className = '',
}: SlowestTasksProps) => (
    <DashboardPanel
        title="Slowest tasks"
        aside={
            <span className="shrink-0 text-[0.7em] text-white/40">
                Lead time
            </span>
        }
        className={className}
    >
        <div
            key={range}
            className="mt-[0.4em] flex flex-col motion-safe:animate-fade-in-up"
        >
            {tasks.map((task) => (
                <div
                    key={task.key}
                    className={`flex h-[1.9em] items-center gap-[0.6em] border-t border-primary-hairline px-[0.5em] transition-colors duration-150 ${rowStateClass(task)}`}
                >
                    <span
                        className={`shrink-0 text-[0.75em] tabular-nums ${
                            task.isSelected ? 'text-white' : 'text-white/50'
                        }`}
                    >
                        {task.key}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[0.75em] text-white">
                        {task.title}
                    </span>
                    <span className="shrink-0 text-[0.75em] tabular-nums text-white">
                        {task.leadTime}
                    </span>
                </div>
            ))}
        </div>
    </DashboardPanel>
)
