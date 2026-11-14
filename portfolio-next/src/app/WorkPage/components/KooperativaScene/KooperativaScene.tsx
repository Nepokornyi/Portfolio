// A client file, because it passes a function and a component to SceneLoop
'use client'

import { SceneLoop } from '@/app/WorkPage/components/SceneLoop'
import {
    DESKTOP_LAYOUT,
    HOLD_MS,
    LOOP_TICKS,
    MOBILE_LAYOUT,
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
        desktopLayout={DESKTOP_LAYOUT}
        mobileLayout={MOBILE_LAYOUT}
    />
)
