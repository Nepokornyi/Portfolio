import { ChartWindow } from './ChartWindow'
import { FeedWindow } from './FeedWindow'
import { PnlWindow } from './PnlWindow'
import { SceneCursor } from './SceneCursor'
import { SceneToast } from './SceneToast'
import { TradeWindow } from './TradeWindow'
import { SceneFrame, SceneLayout } from './types'

type SceneStageProps = {
    frame: SceneFrame
    layout: SceneLayout
    className?: string
}

export const SceneStage = ({
    frame,
    layout,
    className = '',
}: SceneStageProps) => (
    <div className={className} style={{ containerType: 'inline-size' }}>
        <div
            className={`relative ${layout.aspect}`}
            style={{ fontSize: layout.fontSize }}
        >
            <FeedWindow feed={frame.feed} className={layout.feed} />
            {frame.chart && (
                <ChartWindow chart={frame.chart} className={layout.chart} />
            )}
            {frame.trade && (
                <TradeWindow trade={frame.trade} className={layout.trade} />
            )}
            {frame.closedTrade && (
                <PnlWindow
                    closedTrade={frame.closedTrade}
                    className={layout.pnl}
                />
            )}
            <SceneToast message={frame.toast} className={layout.toast} />
            <SceneCursor
                cursor={frame.cursor}
                positions={layout.cursor}
                showPointer={layout.showPointer}
            />
        </div>
    </div>
)
