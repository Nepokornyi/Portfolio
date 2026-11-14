import { ReactNode } from 'react'
import { SceneBrowserWindow } from '@/app/WorkPage/components/SceneBrowserWindow'
import { ApplicationCheck } from './ApplicationCheck'
import { ApprovalResult } from './ApprovalResult'
import { PRODUCT } from './const'
import { InstalmentCalculator } from './InstalmentCalculator'
import { InstalmentPlaceholder } from './InstalmentPlaceholder'
import { OrderItem } from './OrderItem'
import { PaymentMethods } from './PaymentMethods'
import { InstalmentPanel, SceneFrame, SceneLayout } from './types'

const SectionLabel = ({
    children,
    className = '',
}: {
    children: ReactNode
    className?: string
}) => (
    <span
        className={`shrink-0 text-[0.7em] uppercase tracking-[0.15em] text-white/40 ${className}`}
    >
        {children}
    </span>
)

// The views have explicit keys, so a later change of a root element does not stop the fade
const PanelView = ({ panel }: { panel: InstalmentPanel }) => {
    switch (panel.view) {
        case 'placeholder':
            return <InstalmentPlaceholder key="placeholder" />
        case 'calculator':
            return (
                <InstalmentCalculator
                    key="calculator"
                    calculator={panel.calculator}
                />
            )
        case 'checking':
            return (
                <ApplicationCheck key="checking" progress={panel.checkProgress} />
            )
        case 'approved':
            return <ApprovalResult key="approved" plan={panel.plan} />
    }
}

type CheckoutWindowProps = {
    frame: SceneFrame
    layout: SceneLayout
    className?: string
}

export const CheckoutWindow = ({
    frame,
    layout,
    className = '',
}: CheckoutWindowProps) => (
    <SceneBrowserWindow
        address="shop.example.com/cart"
        layout={layout}
        cursor={frame.cursor}
        className={className}
    >
        <div className={`flex h-full ${layout.body}`}>
            {/* The product stays in view in each phase */}
            <div className={`flex min-h-0 min-w-0 flex-col ${layout.order}`}>
                <div className="flex shrink-0 items-baseline justify-between gap-[0.6em]">
                    <span className="text-[1.15em] font-bold leading-tight text-white">
                        Checkout
                    </span>
                    <span className="text-[0.7em] text-white/40">1 item</span>
                </div>
                <OrderItem
                    product={PRODUCT}
                    className={`mt-[0.8em] ${layout.productCard}`}
                    pictureClassName={layout.productPicture}
                />
                {layout.showPaymentLabel && (
                    // 1.2em of the column: the margin is in the em of the label text, which is 0.7em
                    <SectionLabel className="mt-[calc(1.2em/0.7)]">
                        Payment method
                    </SectionLabel>
                )}
                <PaymentMethods
                    options={frame.paymentMethodOptions}
                    showNotes={layout.showPaymentNotes}
                    className={
                        layout.showPaymentLabel ? 'mt-[0.5em]' : 'mt-[0.8em]'
                    }
                />
            </div>

            <div
                className={`flex min-h-0 min-w-0 flex-col border-primary-hairline ${layout.panel}`}
            >
                <SectionLabel>Hello bank! instalments</SectionLabel>
                <PanelView panel={frame.panel} />
            </div>
        </div>
    </SceneBrowserWindow>
)
