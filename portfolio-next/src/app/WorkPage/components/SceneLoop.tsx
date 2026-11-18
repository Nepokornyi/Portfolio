'use client'

import { ComponentType, useRef } from 'react'
import { useStepLoop } from '@/app/hooks/useStepLoop'

type SceneLoopProps<Frame, Layout> = {
    label: string
    loopTicks: number
    tickMs: number
    holdMs: number
    getFrame: (tick: number) => Frame
    Stage: ComponentType<{ frame: Frame; layout: Layout; className?: string }>
    desktopLayout: Layout
    mobileLayout: Layout
}

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
            className="w-full [container-type:inline-size]"
        >
            <Stage
                key={`desktop-${loop}`}
                frame={frame}
                layout={desktopLayout}
                className="mx-auto hidden w-full max-w-[calc(100cqh*3/2)] [@container(min-width:480px)]:block"
            />
            <Stage
                key={`mobile-${loop}`}
                frame={frame}
                layout={mobileLayout}
                className="mx-auto w-full max-w-[min(360px,calc(100cqh*3/4))] [@container(min-width:480px)]:hidden"
            />
        </div>
    )
}
