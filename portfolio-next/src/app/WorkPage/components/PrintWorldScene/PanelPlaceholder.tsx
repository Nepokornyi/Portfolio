type PanelPlaceholderProps = {
    message: string
}

export const PanelPlaceholder = ({ message }: PanelPlaceholderProps) => (
    <div className="flex flex-1 items-center justify-center p-[1em] text-center motion-safe:animate-fade-in-up">
        <span className="text-[0.75em] text-white/40">{message}</span>
    </div>
)
