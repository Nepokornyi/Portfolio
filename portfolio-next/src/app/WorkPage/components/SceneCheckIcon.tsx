type SceneCheckIconProps = {
    className?: string
}

export const SceneCheckIcon = ({ className = '' }: SceneCheckIconProps) => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className={className}
    >
        <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
)
