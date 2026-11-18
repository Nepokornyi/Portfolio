'use client'

import { SceneLoop } from '@/app/WorkPage/components/SceneLoop'
import {
    HOLD_MS,
    LANDSCAPE_LAYOUT,
    LOOP_TICKS,
    PORTRAIT_LAYOUT,
    TICK_MS,
} from './const'
import { DashboardWindow } from './DashboardWindow'
import { getSceneFrame } from './lib/sceneFrame'

export const KooperativaScene = () => (
    <SceneLoop
        label="An animated prototype of the Kooperativa developer dashboard: the user changes the time range to 30 days, the stats and the chart of lead time by stage refresh, and the slowest task opens as one timeline from Jira, GitLab, and SonarQube"
        loopTicks={LOOP_TICKS}
        tickMs={TICK_MS}
        holdMs={HOLD_MS}
        getFrame={getSceneFrame}
        Stage={DashboardWindow}
        landscapeLayout={LANDSCAPE_LAYOUT}
        portraitLayout={PORTRAIT_LAYOUT}
    />
)
