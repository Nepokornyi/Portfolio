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
    const isTaskSelected = frame.timeline !== null

    return (
        <SceneBrowserWindow
            address="grafana.internal/metrics"
            layout={layout}
            cursor={frame.cursor}
            className={className}
        >
            <div className={`flex h-full flex-col ${layout.page}`}>
                <DashboardHeader
                    picker={frame.rangePicker}
                    showSources={layout.showSources}
                />
                <StatTiles
                    stats={frame.stats}
                    detailClassName={layout.statDetail}
                    extraTileClassName={layout.extraStatTile}
                    className={layout.statGrid}
                />
                <div className={`flex min-h-0 flex-1 ${layout.middle}`}>
                    <StageChart
                        bars={frame.bars}
                        className={`flex-1 ${layout.panelPadding}`}
                    />
                    <SlowestTasks
                        tasks={frame.tasks}
                        range={frame.rangePicker.range}
                        rowClassName={layout.taskRow}
                        className={`${layout.tasksPanel} ${layout.panelPadding} ${
                            isTaskSelected
                                ? layout.tasksPanelAfterSelection
                                : ''
                        }`}
                    />
                </div>
                <TaskTimeline
                    timeline={frame.timeline}
                    variant={layout.timeline}
                    className={`${layout.timelinePanel} ${layout.panelPadding} ${
                        isTaskSelected
                            ? ''
                            : layout.timelinePanelBeforeSelection
                    }`}
                />
            </div>
        </SceneBrowserWindow>
    )
}
