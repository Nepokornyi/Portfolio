import { SceneCheckIcon } from '@/app/WorkPage/components/SceneCheckIcon'
import { APPLICANT_NAME } from './const'
import { CursorTarget, IdentityState } from './types'

const IdCard = ({ scanProgress }: { scanProgress: number }) => {
    const isScanning = scanProgress < 1
    const scanPercent = `${scanProgress * 100}%`

    return (
        <div className="relative flex aspect-[1.586] w-[15em] shrink-0 flex-col gap-[0.7em] overflow-hidden border border-primary-stroke bg-primary-input-background p-[0.9em]">
            <div className="flex justify-between text-[0.6em] leading-none text-white/40">
                <span>IDENTITY CARD</span>
                <span>CZE</span>
            </div>
            <div className="flex flex-1 gap-[0.9em]">
                <div className="flex aspect-[4/5] h-full items-end justify-center overflow-hidden bg-white/10">
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="w-4/5 fill-white/30"
                    >
                        <circle cx="12" cy="9" r="4.5" />
                        <path d="M3 24c0-5.5 4-8.5 9-8.5s9 3 9 8.5z" />
                    </svg>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-[0.5em]">
                    <span className="text-[0.8em] font-bold uppercase leading-none text-white">
                        {APPLICANT_NAME}
                    </span>
                    <span className="h-[0.4em] w-4/5 bg-white/15" />
                    <span className="h-[0.4em] w-3/5 bg-white/15" />
                    <span className="h-[0.4em] w-2/3 bg-white/15" />
                </div>
            </div>

            {isScanning && (
                <>
                    <span
                        className="absolute inset-x-0 top-0 bg-gradient-to-b from-transparent to-primary-light-green opacity-20 motion-safe:transition-[height] motion-safe:duration-100 motion-safe:ease-linear"
                        style={{ height: scanPercent }}
                    />
                    <span
                        className="absolute inset-x-0 h-px bg-primary-light-green shadow-[0_0_0.6em_var(--color-primary-light-green)] motion-safe:transition-[top] motion-safe:duration-100 motion-safe:ease-linear"
                        style={{ top: scanPercent }}
                    />
                </>
            )}
        </div>
    )
}

type IdStepProps = {
    identity: IdentityState
}

export const IdStep = ({ identity }: IdStepProps) => {
    if (!identity.isUploaded)
        return (
            <div className="flex flex-col items-center gap-[1.2em] border border-dashed border-primary-hairline px-[1em] py-[2.4em]">
                <span className="text-center text-[0.8em] text-white/60">
                    Add a photo of the front side of your ID card
                </span>
                <div
                    data-cursor-target={'uploadButton' satisfies CursorTarget}
                    className={`flex h-[2.2em] items-center border border-primary-button px-[1.2em] font-bold italic text-primary-button transition-transform duration-100 ${
                        identity.isUploadPressed
                            ? 'translate-x-[0.2em] translate-y-[0.2em]'
                            : ''
                    }`}
                >
                    Upload ID card
                </div>
            </div>
        )

    return (
        <div className="flex flex-wrap items-center gap-x-[1.6em] gap-y-[1.2em] motion-safe:animate-fade-in-up">
            <IdCard scanProgress={identity.scanProgress} />
            <div className="flex flex-col gap-[0.7em] text-[0.8em]">
                {identity.checks.map(({ label, isPassed }) => (
                    <div
                        key={label}
                        className={`flex items-center gap-[0.7em] transition-colors duration-300 ${
                            isPassed ? 'text-white' : 'text-white/40'
                        }`}
                    >
                        <span
                            className={`flex size-[1.3em] shrink-0 items-center justify-center border transition-colors duration-300 ${
                                isPassed
                                    ? 'border-primary-light-green text-primary-light-green'
                                    : 'border-primary-hairline'
                            }`}
                        >
                            {isPassed && <SceneCheckIcon className="size-[1em]" />}
                        </span>
                        {label}
                    </div>
                ))}
            </div>
        </div>
    )
}
