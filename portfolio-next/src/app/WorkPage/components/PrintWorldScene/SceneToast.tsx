import { Rectangle } from '@/components/Rectangle/Rectangle'

type SceneToastProps = {
    message: string | null
    className?: string
}

export const SceneToast = ({ message, className = '' }: SceneToastProps) => {
    if (!message) return null

    return (
        <div
            className={`absolute z-10 flex items-center gap-[0.7em] border border-primary-stroke bg-primary-background px-[0.9em] py-[0.6em] text-[0.8em] text-white motion-safe:animate-fade-in-up ${className}`}
        >
            <Rectangle
                variant="small"
                className="size-[0.6em] shrink-0 bg-primary-light-green"
            />
            {message}
        </div>
    )
}
