import { ReactNode } from 'react'
import { SceneBrowserWindow } from '@/app/WorkPage/components/SceneBrowserWindow'
import { CarPreview } from './CarPreview'
import { ConfigurationSummary } from './ConfigurationSummary'
import { ModelOptions } from './ModelOptions'
import { PaintSwatches } from './PaintSwatches'
import { TotalBar } from './TotalBar'
import { SceneFrame, SceneLayout } from './types'

const SectionLabel = ({
    children,
    className = '',
}: {
    children: ReactNode
    className?: string
}) => (
    <div className={`flex h-[1.2em] shrink-0 items-center ${className}`}>
        <span className="text-[0.7em] uppercase tracking-[0.15em] text-white/40">
            {children}
        </span>
    </div>
)

type ConfiguratorWindowProps = {
    frame: SceneFrame
    layout: SceneLayout
    className?: string
}

export const ConfiguratorWindow = ({
    frame,
    layout,
    className = '',
}: ConfiguratorWindowProps) => (
    <SceneBrowserWindow
        address="cc.skoda-auto.com"
        layout={layout}
        cursor={frame.cursor}
        className={className}
    >
        <div className={`flex h-full ${layout.body}`}>
            <CarPreview
                model={frame.model}
                paint={frame.paint}
                className={layout.preview}
            />

            <div
                className={`flex min-h-0 min-w-0 flex-col border-primary-hairline ${layout.panel}`}
            >
                {frame.isSummaryShown ? (
                    <ConfigurationSummary
                        key="summary"
                        model={frame.model}
                        paint={frame.paint}
                        total={frame.total}
                    />
                ) : (
                    <div key="options" className="flex flex-1 flex-col">
                        <SectionLabel>Model</SectionLabel>
                        <ModelOptions
                            options={frame.modelOptions}
                            className={`mt-[0.5em] ${layout.modelList}`}
                            optionClassName={layout.modelOption}
                        />
                        <SectionLabel className="mt-[1em]">Colour</SectionLabel>
                        <PaintSwatches
                            options={frame.paintOptions}
                            selectedPaint={frame.paint}
                            className="mt-[0.5em]"
                        />
                        <TotalBar
                            total={frame.total}
                            isContinuePressed={frame.isContinuePressed}
                            className="mt-auto"
                        />
                    </div>
                )}
            </div>
        </div>
    </SceneBrowserWindow>
)
