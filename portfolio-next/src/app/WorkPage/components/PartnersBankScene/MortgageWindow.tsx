import { SceneButton } from '@/app/WorkPage/components/SceneButton'
import { SceneCanvas } from '@/app/WorkPage/components/SceneCanvas'
import { AppWindow } from '@/components/AppWindow/AppWindow'
import { ApprovalStep } from './ApprovalStep'
import { STEPS } from './const'
import { FieldsStep } from './FieldsStep'
import { IdStep } from './IdStep'
import { LoanStep } from './LoanStep'
import { Stepper } from './Stepper'
import { SummaryPanel } from './SummaryPanel'
import { SceneFrame, SceneLayout, StepContent } from './types'

const StepBody = ({ content }: { content: StepContent }) => {
    switch (content.step) {
        case 'loan':
            return <LoanStep loan={content.loan} />
        case 'personal':
        case 'income':
            return <FieldsStep fields={content.fields} />
        case 'identity':
            return <IdStep identity={content.identity} />
        case 'approval':
            return <ApprovalStep approval={content.approval} />
    }
}

type MortgageWindowProps = {
    frame: SceneFrame
    layout: SceneLayout
    className?: string
}

export const MortgageWindow = ({
    frame,
    layout,
    className = '',
}: MortgageWindowProps) => {
    const { content, primaryButton } = frame
    const title = STEPS.find((step) => step.id === content.step)?.title

    return (
        <SceneCanvas
            aspect={layout.aspect}
            fontSize={layout.fontSize}
            cursorPosition={layout.cursor[frame.cursor.target]}
            isClicking={frame.cursor.isClicking}
            showPointer={layout.showPointer}
            className={className}
        >
            <AppWindow
                className="absolute inset-0 motion-safe:animate-fade-in-up"
                title={
                    <span className="mx-auto w-[45%] bg-primary-input-background py-[0.2em] text-center text-[0.8em]">
                        <span className="opacity-60">
                            partnersbanka.cz/hypoteka
                        </span>
                    </span>
                }
            >
                <div className="flex h-full">
                    <div className="flex flex-1 flex-col">
                        <Stepper
                            completedSteps={frame.completedSteps}
                            className="px-[1em] pt-[1.4em]"
                        />

                        {/* A step mounts when it becomes active, so the fade plays on each step */}
                        <div
                            key={content.step}
                            className="flex flex-1 flex-col gap-[1.1em] px-[2em] pt-[1.6em] motion-safe:animate-fade-in-up"
                        >
                            {!frame.isApproved && (
                                <span className="text-[1.15em] font-bold leading-tight text-white">
                                    {title}
                                </span>
                            )}
                            <div className="flex-1">
                                <StepBody content={content} />
                            </div>
                        </div>

                        <div className="flex h-[4.4em] shrink-0 items-center justify-end px-[2em]">
                            {primaryButton && (
                                <SceneButton
                                    isPressed={primaryButton.isPressed}
                                    className={`transition-opacity duration-300 ${
                                        primaryButton.isEnabled
                                            ? ''
                                            : 'opacity-40'
                                    }`}
                                >
                                    {primaryButton.label}
                                </SceneButton>
                            )}
                        </div>
                    </div>

                    {layout.showSummary && (
                        <SummaryPanel
                            rows={frame.summary}
                            isApproved={frame.isApproved}
                            className="w-[36%]"
                        />
                    )}
                </div>
            </AppWindow>
        </SceneCanvas>
    )
}
