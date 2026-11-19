import { ReactNode } from 'react'

const VARIANT_CLASSES = {
    filled: 'bg-primary-button text-black',
    outline: 'bg-primary-background text-primary-button',
}

type SceneButtonProps = {
    children: ReactNode
    isPressed: boolean
    variant?: keyof typeof VARIANT_CLASSES
    cursorTarget?: string
    className?: string
}

export const SceneButton = ({
    children,
    isPressed,
    variant = 'filled',
    cursorTarget,
    className = '',
}: SceneButtonProps) => (
    <div
        data-cursor-target={cursorTarget}
        className={`relative mb-[0.3em] mr-[0.3em] ${className}`}
    >
        <span className="absolute inset-0 translate-x-[0.3em] translate-y-[0.3em] border border-primary-button" />
        <div
            className={`relative flex h-[2.2em] items-center justify-center border border-primary-button px-[1.4em] font-bold italic transition-transform duration-100 ${
                VARIANT_CLASSES[variant]
            } ${isPressed ? 'translate-x-[0.2em] translate-y-[0.2em]' : ''}`}
        >
            {children}
        </div>
    </div>
)
