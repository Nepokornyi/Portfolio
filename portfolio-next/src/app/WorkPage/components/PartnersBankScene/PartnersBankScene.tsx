'use client'

import { useRef } from 'react'
import { useStepLoop } from '@/app/hooks/useStepLoop'
import {
    DESKTOP_LAYOUT,
    HOLD_MS,
    LOOP_TICKS,
    MOBILE_LAYOUT,
    TICK_MS,
} from './const'
import { getSceneFrame } from './lib/sceneFrame'
import { MortgageWindow } from './MortgageWindow'

export const PartnersBankScene = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { step, loop } = useStepLoop(
        containerRef,
        LOOP_TICKS,
        TICK_MS,
        HOLD_MS,
    )
    const frame = getSceneFrame(step)

    return (
        <div
            ref={containerRef}
            role="img"
            aria-label="An animated prototype of the Partners Banka mortgage application: the user sets the loan amount, gives personal details, verifies an ID card, gives the income, and the bank approves the mortgage"
            className="w-full"
        >
            <MortgageWindow
                key={`desktop-${loop}`}
                frame={frame}
                layout={DESKTOP_LAYOUT}
                className="mx-auto hidden w-full max-w-[calc(100cqh*3/2)] lg:block"
            />
            <MortgageWindow
                key={`mobile-${loop}`}
                frame={frame}
                layout={MOBILE_LAYOUT}
                className="mx-auto w-full max-w-[360px] lg:hidden"
            />
        </div>
    )
}
