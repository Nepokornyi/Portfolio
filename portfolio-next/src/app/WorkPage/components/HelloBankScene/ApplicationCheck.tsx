type ApplicationCheckProps = {
    progress: number
}

export const ApplicationCheck = ({ progress }: ApplicationCheckProps) => (
    <div className="mt-[0.8em] flex flex-1 flex-col justify-center gap-[0.8em] motion-safe:animate-fade-in-up">
        <span className="text-[0.9em] text-white">
            Hello bank! checks your application…
        </span>
        <div className="h-[0.4em] bg-primary-input-background">
            <div
                className="h-full bg-primary-stroke motion-safe:transition-[width] motion-safe:duration-100 motion-safe:ease-linear"
                style={{ width: `${progress * 100}%` }}
            />
        </div>
        <span className="text-[0.7em] text-white/40">
            It takes only a few seconds
        </span>
    </div>
)
