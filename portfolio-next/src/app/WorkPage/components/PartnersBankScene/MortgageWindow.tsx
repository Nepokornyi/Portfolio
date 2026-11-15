import { SceneCursor } from '@/app/WorkPage/components/SceneCursor'
import { AppWindow } from '@/components/AppWindow/AppWindow'
import { ApprovalStep } from './ApprovalStep'
import { STEPS } from './const'
import { FieldsStep } from './FieldsStep'
import { IdStep } from './IdStep'
import { LoanStep } from './LoanStep'
import { Stepper } from './Stepper'
import { SummaryPanel } from './SummaryPanel'
import {
    PrimaryButtonState,
    SceneFrame,
    SceneLayout,
    StepContent,
} from './types'

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

const PrimaryButton = ({ button }: { button: PrimaryButtonState }) => (
    <div
        className={`relative mb-[0.3em] mr-[0.3em] transition-opacity duration-300 ${
            button.isEnabled ? '' : 'opacity-40'
        }`}
    >
        <span className="absolute inset-0 translate-x-[0.3em] translate-y-[0.3em] border border-primary-button" />
        <div
            className={`relative flex h-[2.2em] items-center justify-center border border-primary-button bg-primary-button px-[1.4em] font-bold italic text-black transition-transform duration-100 ${
                button.isPressed
                    ? 'translate-x-[0.2em] translate-y-[0.2em]'
                    : ''
            }`}
        >
            {button.label}
        </div>
    </div>
)

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
        <div className={className} style={{ containerType: 'inline-size' }}>
            <div
                className={`relative ${layout.aspect}`}
                style={{ fontSize: layout.fontSize }}
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
                                    <PrimaryButton button={primaryButton} />
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

                <SceneCursor
                    position={layout.cursor[frame.cursor.target]}
                    isClicking={frame.cursor.isClicking}
                    showPointer={layout.showPointer}
                />
            </div>
        </div>
    )
}
