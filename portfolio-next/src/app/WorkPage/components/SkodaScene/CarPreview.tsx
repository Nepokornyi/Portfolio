import { CarSilhouette } from './CarSilhouette'
import { CarModel, Paint } from './types'

type CarPreviewProps = {
    model: CarModel
    paint: Paint
    className?: string
}

export const CarPreview = ({
    model,
    paint,
    className = '',
}: CarPreviewProps) => (
    <div className={`flex min-h-0 min-w-0 flex-col ${className}`}>
        <div className="flex flex-col gap-[0.3em]">
            <span className="text-[0.7em] uppercase tracking-[0.2em] text-white/40">
                Škoda
            </span>
            <span className="text-[1.8em] font-bold leading-none text-white">
                {model.name}
            </span>
        </div>

        {/* The car mounts again for each model, so the fade plays on each model change */}
        <div
            key={model.name}
            className="relative min-h-0 flex-1 motion-safe:animate-fade-in-up"
        >
            <CarSilhouette
                bodyStyle={model.bodyStyle}
                className={`absolute inset-0 size-full drop-shadow-[0_0_0.4em_currentColor] transition-colors duration-500 ${paint.carColor}`}
            />
        </div>
    </div>
)
