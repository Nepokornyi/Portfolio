import { BodyStyle } from './types'

type Silhouette = {
    // The outline of the body and the cabin. The front of the car is on the left.
    body: string
    windows: string[]
    wheelRadius: number
    wheelX: [number, number]
}

const GROUND_Y = 90

const SILHOUETTES: Record<BodyStyle, Silhouette> = {
    // Short, with a steep rear
    hatchback: {
        body: '48,82 44,70 50,62 90,57 112,40 168,39 186,46 194,60 196,74 192,82',
        windows: ['96,56 114,43 138,43 138,56', '143,56 143,43 166,43 180,56'],
        wheelRadius: 13,
        wheelX: [76, 164],
    },
    // Longer, with a long sloped rear and a small lip
    liftback: {
        body: '32,82 28,70 36,62 84,57 110,40 146,38 198,52 210,56 214,70 210,82',
        windows: ['90,56 112,43 134,43 134,56', '139,56 139,42 148,42 190,56'],
        wheelRadius: 13.5,
        wheelX: [64, 182],
    },
    // Taller and boxier, with a flat roof and larger wheels
    suv: {
        body: '34,80 30,62 38,52 84,48 104,28 194,27 206,38 210,62 208,80',
        windows: [
            '91,47 106,31 130,31 130,47',
            '135,47 135,31 163,31 163,47',
            '168,47 168,31 192,31 200,47',
        ],
        wheelRadius: 16,
        wheelX: [68, 176],
    },
}

type CarSilhouetteProps = {
    bodyStyle: BodyStyle
    className?: string
}

// A side view in line art. It draws with currentColor, so a text colour class paints the car.
export const CarSilhouette = ({
    bodyStyle,
    className = '',
}: CarSilhouetteProps) => {
    const { body, windows, wheelRadius, wheelX } = SILHOUETTES[bodyStyle]
    const wheelY = GROUND_Y - wheelRadius

    return (
        <svg
            viewBox="0 16 240 80"
            aria-hidden
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className={className}
        >
            <ellipse
                cx="120"
                cy={GROUND_Y}
                rx="96"
                ry="3.5"
                fill="currentColor"
                fillOpacity={0.12}
                stroke="none"
            />
            <line
                x1="12"
                x2="228"
                y1={GROUND_Y}
                y2={GROUND_Y}
                className="stroke-primary-hairline"
            />
            <polygon points={body} fill="currentColor" fillOpacity={0.08} />
            {windows.map((points) => (
                <polygon
                    key={points}
                    points={points}
                    fill="currentColor"
                    fillOpacity={0.2}
                />
            ))}
            {/* The wheels paint over the bottom line of the body */}
            {wheelX.map((x) => (
                <g key={x}>
                    <circle
                        cx={x}
                        cy={wheelY}
                        r={wheelRadius}
                        className="fill-primary-background"
                    />
                    <circle cx={x} cy={wheelY} r={wheelRadius * 0.4} />
                </g>
            ))}
        </svg>
    )
}
