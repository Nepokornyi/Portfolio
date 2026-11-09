import { CursorPositions, SceneFrame } from './types'

type SceneCursorProps = {
    cursor: SceneFrame['cursor']
    positions: CursorPositions
    showPointer: boolean
}

export const SceneCursor = ({
    cursor,
    positions,
    showPointer,
}: SceneCursorProps) => {
    const position = positions[cursor.target]
    if (!position) return null

    return (
        <div
            className="pointer-events-none absolute z-20 motion-safe:transition-[left,top] motion-safe:duration-700 motion-safe:ease-in-out"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
        >
            {!showPointer && cursor.isClicking && (
                <span className="absolute -left-[0.8em] -top-[0.8em] size-[1.6em] rounded-full bg-white/30 motion-safe:animate-ping" />
            )}
            {showPointer && (
                <svg
                    viewBox="0 0 24 24"
                    className={`size-[1.6em] transition-transform duration-100 ${
                        cursor.isClicking ? 'scale-75' : ''
                    }`}
                >
                    <path
                        d="M4 2l15 11-6.5 1 3.6 7.2-2.6 1.3-3.6-7.2L4 20z"
                        className="fill-primary-background stroke-primary-stroke"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </div>
    )
}
