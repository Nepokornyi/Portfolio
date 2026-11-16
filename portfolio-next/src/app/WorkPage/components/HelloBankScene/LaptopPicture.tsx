type LaptopPictureProps = {
    className?: string
}

export const LaptopPicture = ({ className = '' }: LaptopPictureProps) => (
    <svg
        viewBox="0 0 120 74"
        aria-hidden
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <ellipse
            cx="60"
            cy="70"
            rx="50"
            ry="2.5"
            fill="currentColor"
            fillOpacity={0.12}
            stroke="none"
        />
        <rect
            x="22"
            y="6"
            width="76"
            height="52"
            rx="3"
            fill="currentColor"
            fillOpacity={0.08}
        />
        <rect
            x="27"
            y="11"
            width="66"
            height="42"
            fill="currentColor"
            fillOpacity={0.12}
            stroke="none"
        />
        <line x1="34" y1="22" x2="72" y2="22" />
        <line x1="34" y1="30" x2="60" y2="30" />
        <path d="M10 58 H110 L104 66 H16 Z" fill="currentColor" fillOpacity={0.08} />
        <path d="M52 58 v2.5 h16 v-2.5" />
    </svg>
)
