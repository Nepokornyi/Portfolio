import { SceneCheckIcon } from '@/app/WorkPage/components/SceneCheckIcon'
import { STEPS } from './const'

type StepperProps = {
    completedSteps: number
    className?: string
}

export const Stepper = ({ completedSteps, className = '' }: StepperProps) => (
    <div className={`flex ${className}`}>
        {STEPS.map(({ id, label }, index) => {
            const isDone = index < completedSteps
            const isActive = index === completedSteps
            const isReached = isDone || isActive

            return (
                <div
                    key={id}
                    className="relative flex flex-1 flex-col items-center gap-[0.55em]"
                >
                    {/* The line from the mark of the step before to this mark.
                        The marks have a z-index, because this line paints after the mark of the step before. */}
                    {index > 0 && (
                        <span
                            className={`absolute right-1/2 top-[0.65em] h-px w-full transition-colors duration-300 ${
                                isReached
                                    ? 'bg-primary-stroke'
                                    : 'bg-primary-hairline'
                            }`}
                        />
                    )}
                    <span
                        className={`relative z-10 flex size-[1.3em] rotate-45 items-center justify-center border transition-colors duration-300 ${
                            isDone
                                ? 'border-primary-stroke bg-primary-button text-black'
                                : isActive
                                  ? 'border-primary-stroke bg-primary-background text-white'
                                  : 'border-primary-hairline bg-primary-background text-white/40'
                        }`}
                    >
                        <span className="-rotate-45 text-[0.7em] leading-none">
                            {isDone ? (
                                <SceneCheckIcon className="size-[1.6em]" />
                            ) : (
                                index + 1
                            )}
                        </span>
                    </span>
                    <span
                        className={`text-[0.7em] leading-none ${
                            isReached ? 'text-white' : 'text-white/40'
                        }`}
                    >
                        {label}
                    </span>
                </div>
            )
        })}
    </div>
)
