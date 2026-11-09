import { DemoFormField } from '@/app/ContactPage/types'
import { AppWindow } from '@/components/AppWindow/AppWindow'

const MiniField = ({ component, props }: DemoFormField) => {
    if (component === 'Button')
        return (
            <div className="ml-auto mt-[0.3em] flex h-[1.9em] w-[6.5em] items-center justify-center bg-primary-button text-[0.85em] font-bold italic text-black">
                {props.children}
            </div>
        )

    return (
        <div className="flex flex-col gap-[0.3em]">
            <span className="h-[1.4em] text-[0.8em]">{props.label}</span>
            <div
                className={`border border-primary-stroke bg-primary-input-background px-[0.6em] py-[0.4em] text-[0.7em] ${
                    component === 'Textarea' ? 'h-[5em]' : 'h-[2.2em]'
                }`}
            >
                <span className="opacity-50">{props.placeholder}</span>
            </div>
        </div>
    )
}

type BrowserWindowProps = {
    fields: DemoFormField[]
    className?: string
}

export const BrowserWindow = ({ fields, className }: BrowserWindowProps) => (
    <AppWindow
        className={className}
        title={
            <span className="mx-auto w-[45%] bg-primary-input-background py-[0.2em] text-center text-[0.8em]">
                <span className="opacity-60">localhost:3000</span>
            </span>
        }
    >
        <div className="flex w-[72%] flex-col gap-[0.7em] p-[1.4em]">
            {/* A field mounts when its tag is typed, so the fade plays on each loop */}
            {fields.map((field, index) => (
                <div key={index} className="motion-safe:animate-fade-in-up">
                    <MiniField {...field} />
                </div>
            ))}
        </div>
    </AppWindow>
)
