import { SceneBrowserWindow } from '@/app/WorkPage/components/SceneBrowserWindow'
import { TerminalHeader } from '@/app/WorkPage/components/PrintWorldScene/TerminalHeader'
import { TokenChart } from '@/app/WorkPage/components/PrintWorldScene/TokenChart'
import { TokenFeed } from '@/app/WorkPage/components/PrintWorldScene/TokenFeed'
import { TradePanel } from '@/app/WorkPage/components/PrintWorldScene/TradePanel'
import {
    SceneFrame,
    SceneLayout,
} from '@/app/WorkPage/components/PrintWorldScene/types'

type TerminalWindowProps = {
    frame: SceneFrame
    layout: SceneLayout
    className?: string
}

export const TerminalWindow = ({
    frame,
    layout,
    className = '',
}: TerminalWindowProps) => (
    <SceneBrowserWindow
        address="print.world"
        layout={layout}
        cursor={frame.cursor}
        className={className}
    >
        <div className={`flex h-full flex-col ${layout.page}`}>
            <TerminalHeader toast={frame.toast} />
            <div
                className={`flex min-h-0 flex-1 ${layout.body} ${layout.panelGap}`}
            >
                <TokenFeed
                    feed={frame.feed}
                    className={layout.feed}
                    listClassName={layout.feedList}
                    rowClassName={layout.feedRow}
                />
                <div
                    className={`flex min-h-0 min-w-0 flex-col ${layout.main} ${layout.panelGap}`}
                >
                    <TokenChart chart={frame.chart} className="flex-1" />
                    <TradePanel
                        trade={frame.trade}
                        closedTrade={frame.closedTrade}
                        className="h-[9em] shrink-0"
                    />
                </div>
            </div>
        </div>
    </SceneBrowserWindow>
)
