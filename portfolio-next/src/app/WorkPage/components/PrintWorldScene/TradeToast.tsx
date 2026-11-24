import { Rectangle } from '@/components/Rectangle/Rectangle'

type TradeToastProps = {
    message: string | null
    className?: string
}

export const TradeToast = ({ message, className = '' }: TradeToastProps) => {
    if (!message) return null

    return (
        <div
            className={`flex min-w-0 items-center gap-[0.7em] border border-primary-light-green px-[0.9em] py-[0.4em] text-[0.8em] text-white motion-safe:animate-fade-in-up ${className}`}
        >
            <Rectangle
                variant="small"
                className="size-[0.6em] shrink-0 bg-primary-light-green"
            />
            <span className="truncate">{message}</span>
        </div>
    )
}
