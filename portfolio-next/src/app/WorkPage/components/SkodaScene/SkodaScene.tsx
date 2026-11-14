// A client file, because it passes a function and a component to SceneLoop
'use client'

import { SceneLoop } from '@/app/WorkPage/components/SceneLoop'
import { ConfiguratorWindow } from './ConfiguratorWindow'
import {
    DESKTOP_LAYOUT,
    HOLD_MS,
    LOOP_TICKS,
    MOBILE_LAYOUT,
    TICK_MS,
} from './const'
import { getSceneFrame } from './lib/sceneFrame'

export const SkodaScene = () => (
    <SceneLoop
        label="An animated prototype of the Škoda car configurator: the user changes the model to the Octavia, tries two paint colours while the price updates, and saves the configuration"
        loopTicks={LOOP_TICKS}
        tickMs={TICK_MS}
        holdMs={HOLD_MS}
        getFrame={getSceneFrame}
        Stage={ConfiguratorWindow}
        desktopLayout={DESKTOP_LAYOUT}
        mobileLayout={MOBILE_LAYOUT}
    />
)
