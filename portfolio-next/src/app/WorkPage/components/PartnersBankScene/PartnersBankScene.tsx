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
import { getSceneFrame } from './lib/sceneFrame'
import { MortgageWindow } from './MortgageWindow'

export const PartnersBankScene = () => (
    <SceneLoop
        label="An animated prototype of the Partners Banka mortgage application: the user sets the loan amount, gives personal details, verifies an ID card, gives the income, and the bank approves the mortgage"
        loopTicks={LOOP_TICKS}
        tickMs={TICK_MS}
        holdMs={HOLD_MS}
        getFrame={getSceneFrame}
        Stage={MortgageWindow}
        desktopLayout={DESKTOP_LAYOUT}
        mobileLayout={MOBILE_LAYOUT}
    />
)
