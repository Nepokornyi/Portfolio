// A client file, because it passes a function and a component to SceneLoop
'use client'

import { SceneLoop } from '@/app/WorkPage/components/SceneLoop'
import { CheckoutWindow } from './CheckoutWindow'
import {
    DESKTOP_LAYOUT,
    HOLD_MS,
    LOOP_TICKS,
    MOBILE_LAYOUT,
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
        desktopLayout={DESKTOP_LAYOUT}
        mobileLayout={MOBILE_LAYOUT}
    />
)
