'use client'

import { SceneLoop } from '@/app/WorkPage/components/SceneLoop'
import { CheckoutWindow } from './CheckoutWindow'
import {
    LANDSCAPE_LAYOUT,
    HOLD_MS,
    LOOP_TICKS,
    PORTRAIT_LAYOUT,
    TICK_MS,
} from './const'
import { getSceneFrame } from './lib/sceneFrame'

export const HelloBankScene = () => (
    <SceneLoop
        label="An animated prototype of a shop checkout with Hello bank! instalments: the customer chooses to pay for a laptop in instalments, compares the monthly payment for 12 and 24 months, applies, and the bank approves the plan"
        loopTicks={LOOP_TICKS}
        tickMs={TICK_MS}
        holdMs={HOLD_MS}
        getFrame={getSceneFrame}
        Stage={CheckoutWindow}
        landscapeLayout={LANDSCAPE_LAYOUT}
        portraitLayout={PORTRAIT_LAYOUT}
    />
)
