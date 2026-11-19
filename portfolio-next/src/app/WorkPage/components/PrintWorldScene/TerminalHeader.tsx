import { Rectangle } from '@/components/Rectangle/Rectangle'
import { TradeToast } from './TradeToast'

type TerminalHeaderProps = {
    toast: string | null
}

export const TerminalHeader = ({ toast }: TerminalHeaderProps) => (
    <div className="flex h-[2.2em] shrink-0 items-center gap-[0.6em]">
        <Rectangle
            variant="small"
            className="size-[0.7em] shrink-0 bg-primary-light-green"
        />
        <span className="shrink-0 text-[1.05em] font-bold text-white">
            print.world
        </span>
        <TradeToast message={toast} className="ml-auto" />
    </div>
)
