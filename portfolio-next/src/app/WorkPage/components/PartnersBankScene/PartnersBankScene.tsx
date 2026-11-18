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
import { MortgageWindow } from './MortgageWindow'

export const PartnersBankScene = () => (
    <SceneLoop
        label="An animated prototype of the Partners Banka mortgage application: the user sets the loan amount, gives personal details, verifies an ID card, gives the income, and the bank approves the mortgage"
        loopTicks={LOOP_TICKS}
        tickMs={TICK_MS}
        holdMs={HOLD_MS}
        getFrame={getSceneFrame}
        Stage={MortgageWindow}
        landscapeLayout={LANDSCAPE_LAYOUT}
        portraitLayout={PORTRAIT_LAYOUT}
    />
)
