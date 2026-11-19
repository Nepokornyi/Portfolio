import { SceneBrowserWindow } from '@/app/WorkPage/components/SceneBrowserWindow'
import { SceneButton } from '@/app/WorkPage/components/SceneButton'
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
        <SceneBrowserWindow
            address="partnersbanka.cz/hypoteka"
            layout={layout}
            cursor={frame.cursor}
            className={className}
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
                            <SceneButton
                                isPressed={primaryButton.isPressed}
                                cursorTarget="primaryButton"
                                className={`transition-opacity duration-300 ${
                                    primaryButton.isEnabled ? '' : 'opacity-40'
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
        </SceneBrowserWindow>
    )
}
