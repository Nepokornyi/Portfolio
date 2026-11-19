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
    landscapeLayout: Layout
    portraitLayout: Layout
}

export const SceneLoop = <Frame, Layout>({
    label,
    loopTicks,
    tickMs,
    holdMs,
    getFrame,
    Stage,
    landscapeLayout,
    portraitLayout,
}: SceneLoopProps<Frame, Layout>) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { step, loop } = useStepLoop(containerRef, loopTicks, tickMs, holdMs)
    const frame = getFrame(step)

    return (
        <div
            ref={containerRef}
            role="img"
            aria-label={label}
            className="relative size-full [--max-page-stretch:2]"
        >
            <Stage
                key={`landscape-${loop}`}
                frame={frame}
                layout={landscapeLayout}
                className="hidden max-h-[calc(var(--max-page-stretch)*100cqw*2/3)] text-[length:min(1.8cqw,2.7cqh)] [@container(min-width:480px)]:block"
            />
            <Stage
                key={`portrait-${loop}`}
                frame={frame}
                layout={portraitLayout}
                className="max-h-[calc(var(--max-page-stretch)*100cqw*4/3)] text-[length:min(3.6cqw,2.7cqh)] [@container(min-width:480px)]:hidden"
            />
        </div>
    )
}
