import { SceneCanvas } from '@/app/WorkPage/components/SceneCanvas'
import { ChartWindow } from './ChartWindow'
import { FeedWindow } from './FeedWindow'
import { PnlWindow } from './PnlWindow'
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
    <SceneCanvas
        aspect={layout.aspect}
        fontSize={layout.fontSize}
        cursorPosition={layout.cursor[frame.cursor.target]}
        isClicking={frame.cursor.isClicking}
        showPointer={layout.showPointer}
        className={className}
    >
        <FeedWindow feed={frame.feed} className={layout.feed} />
        {frame.chart && (
            <ChartWindow chart={frame.chart} className={layout.chart} />
        )}
        {frame.trade && (
            <TradeWindow trade={frame.trade} className={layout.trade} />
        )}
        {frame.closedTrade && (
            <PnlWindow closedTrade={frame.closedTrade} className={layout.pnl} />
        )}
        <SceneToast message={frame.toast} className={layout.toast} />
    </SceneCanvas>
)
