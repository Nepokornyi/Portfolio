'use client'

import { SceneLoop } from '@/app/WorkPage/components/SceneLoop'
import {
    DESKTOP_LAYOUT,
    HOLD_MS,
    LOOP_TICKS,
    MOBILE_LAYOUT,
    TICK_MS,
} from './const'
import { getSceneFrame } from './lib/sceneFrame'
import { SceneStage } from './SceneStage'

export const PrintWorldScene = () => (
    <SceneLoop
        label="An animated prototype of print.world: a new token appears in the feed, the user opens its chart, buys it, and sells it at a profit"
        loopTicks={LOOP_TICKS}
        tickMs={TICK_MS}
        holdMs={HOLD_MS}
        getFrame={getSceneFrame}
        Stage={SceneStage}
        desktopLayout={DESKTOP_LAYOUT}
        mobileLayout={MOBILE_LAYOUT}
    />
)
