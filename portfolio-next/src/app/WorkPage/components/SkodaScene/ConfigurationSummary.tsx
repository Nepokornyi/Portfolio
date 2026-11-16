import { SceneCheckIcon } from '@/app/WorkPage/components/SceneCheckIcon'
import { formatCrowns } from '@/app/WorkPage/lib/format'
import { formatSurcharge } from './lib/format'
import { CarModel, Paint } from './types'

const SummaryRow = ({
    label,
    name,
    price,
}: {
    label: string
    name: string
    price: string
}) => (
    <div className="flex items-baseline gap-[0.6em] border-b border-primary-hairline py-[0.6em]">
        <span className="w-[4.5em] shrink-0 text-white/40">{label}</span>
        <span className="min-w-0 flex-1 truncate text-white">{name}</span>
        <span className="tabular-nums text-white">{price}</span>
    </div>
)

type ConfigurationSummaryProps = {
    model: CarModel
    paint: Paint
    total: number
}

export const ConfigurationSummary = ({
    model,
    paint,
    total,
}: ConfigurationSummaryProps) => (
    <div className="flex flex-1 flex-col motion-safe:animate-fade-in-up">
        <span className="font-bold leading-tight text-white">
            Your configuration
        </span>

        <div className="mt-[0.8em] flex flex-col text-[0.8em]">
            <SummaryRow
                label="Model"
                name={model.name}
                price={formatCrowns(model.price)}
            />
            <SummaryRow
                label="Colour"
                name={paint.name}
                price={formatSurcharge(paint.surcharge)}
            />
        </div>

        <div className="mt-[0.9em] flex items-baseline justify-between gap-[0.6em]">
            <span className="text-[0.8em] text-white/60">Total price</span>
            <span className="text-[1.4em] font-bold tabular-nums text-primary-light-green">
                {formatCrowns(total)}
            </span>
        </div>

        <div className="mt-auto flex items-center gap-[0.6em] font-bold text-primary-light-green">
            <SceneCheckIcon className="size-[1.2em] shrink-0" />
            <span className="text-[0.9em]">Configuration saved</span>
        </div>
    </div>
)
