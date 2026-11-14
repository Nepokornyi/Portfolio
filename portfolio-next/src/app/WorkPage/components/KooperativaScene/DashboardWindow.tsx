import { SceneBrowserWindow } from '@/app/WorkPage/components/SceneBrowserWindow'
import { DashboardHeader } from './DashboardHeader'
import { SlowestTasks } from './SlowestTasks'
import { StageChart } from './StageChart'
import { StatTiles } from './StatTiles'
import { TaskTimeline } from './TaskTimeline'
import { SceneFrame, SceneLayout } from './types'

type DashboardWindowProps = {
    frame: SceneFrame
    layout: SceneLayout
    className?: string
}

export const DashboardWindow = ({
    frame,
    layout,
    className = '',
}: DashboardWindowProps) => {
    const timelinePanel = (
        <TaskTimeline
            timeline={frame.timeline}
            variant={layout.timeline}
            className={`${layout.timelinePanel} ${layout.panel}`}
        />
    )
    const isTimelineInTaskPlace =
        layout.timelineReplacesTasks && frame.timeline !== null

    return (
        <SceneBrowserWindow
            address="grafana.internal/metrics"
            layout={layout}
            cursor={frame.cursor}
            className={className}
        >
            <div className={`flex h-full flex-col ${layout.body}`}>
                <DashboardHeader
                    picker={frame.rangePicker}
                    showSources={layout.showSources}
                />
                <StatTiles
                    stats={frame.stats.filter((stat) =>
                        layout.statIds.includes(stat.id),
                    )}
                    showDetail={layout.showStatDetail}
                    className={layout.statGrid}
                />
                <div className={`flex min-h-0 flex-1 ${layout.middle}`}>
                    <StageChart
                        bars={frame.bars}
                        className={`flex-1 ${layout.panel}`}
                    />
                    {isTimelineInTaskPlace ? (
                        timelinePanel
                    ) : (
                        <SlowestTasks
                            tasks={frame.tasks.slice(0, layout.taskRows)}
                            range={frame.rangePicker.range}
                            className={`${layout.tasksPanel} ${layout.panel}`}
                        />
                    )}
                </div>
                {!layout.timelineReplacesTasks && timelinePanel}
            </div>
        </SceneBrowserWindow>
    )
}
