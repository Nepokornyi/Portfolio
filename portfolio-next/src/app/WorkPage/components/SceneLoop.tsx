'use client'

import { ComponentType, useRef } from 'react'
import { useStepLoop } from '@/app/hooks/useStepLoop'

type SceneLoopProps<Frame, Layout> = {
    // Describes the story of the scene for screen readers
    label: string
    loopTicks: number
    tickMs: number
    holdMs: number
    getFrame: (tick: number) => Frame
    Stage: ComponentType<{ frame: Frame; layout: Layout; className?: string }>
    desktopLayout: Layout
    mobileLayout: Layout
}

// Plays a prototype scene in a loop. The loop key remounts the stages, so each loop starts clean.
export const SceneLoop = <Frame, Layout>({
    label,
    loopTicks,
    tickMs,
    holdMs,
    getFrame,
    Stage,
    desktopLayout,
    mobileLayout,
}: SceneLoopProps<Frame, Layout>) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { step, loop } = useStepLoop(containerRef, loopTicks, tickMs, holdMs)
    const frame = getFrame(step)

    return (
        <div
            ref={containerRef}
            role="img"
            aria-label={label}
            className="w-full"
        >
            {/* The desktop limit keeps a 3:2 stage inside the height of the size container (the scene cell in WorkDetails).
                It assumes the 3:2 aspect that each desktop layout sets. */}
            <Stage
                key={`desktop-${loop}`}
                frame={frame}
                layout={desktopLayout}
                className="mx-auto hidden w-full max-w-[calc(100cqh*3/2)] lg:block"
            />
            <Stage
                key={`mobile-${loop}`}
                frame={frame}
                layout={mobileLayout}
                className="mx-auto w-full max-w-[360px] lg:hidden"
            />
        </div>
    )
}
