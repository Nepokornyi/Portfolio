import { FormField } from './types'

type FieldsStepProps = {
    fields: FormField[]
}

export const FieldsStep = ({ fields }: FieldsStepProps) => (
    <div className="flex flex-col gap-[0.9em]">
        {fields.map(({ label, value, isFocused }) => (
            <div key={label} className="flex flex-col gap-[0.3em]">
                <span className="text-[0.8em] text-white/60">{label}</span>
                <div
                    className={`flex h-[2.2em] items-center border bg-primary-input-background px-[0.6em] text-[0.9em] ${
                        isFocused
                            ? 'border-primary-stroke shadow-[0_0_0_1px_var(--color-primary-stroke)]'
                            : 'border-primary-hairline'
                    }`}
                >
                    <span className="whitespace-pre text-white">{value}</span>
                    {isFocused && (
                        <span className="ml-px inline-block h-[1.1em] border-l border-white motion-safe:animate-blink" />
                    )}
                </div>
            </div>
        ))}
    </div>
)
