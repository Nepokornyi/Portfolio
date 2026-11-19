'use client'

import { SceneLoop } from '@/app/WorkPage/components/SceneLoop'
import {
    HOLD_MS,
    LANDSCAPE_LAYOUT,
    LOOP_TICKS,
    PORTRAIT_LAYOUT,
    TICK_MS,
} from './const'
import { getSceneFrame } from './lib/sceneFrame'
import { TerminalWindow } from './TerminalWindow'

export const PrintWorldScene = () => (
    <SceneLoop
        label="An animated prototype of print.world: a new token appears in the feed, the user opens its chart, buys it, and sells it at a profit"
        loopTicks={LOOP_TICKS}
        tickMs={TICK_MS}
        holdMs={HOLD_MS}
        getFrame={getSceneFrame}
        Stage={TerminalWindow}
        landscapeLayout={LANDSCAPE_LAYOUT}
        portraitLayout={PORTRAIT_LAYOUT}
    />
)
