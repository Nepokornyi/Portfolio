export type CursorPosition = { x: number; y: number }

type SceneCursorProps = {
    // In percent of the canvas. With null, the cursor is hidden.
    position: CursorPosition | null
    isClicking: boolean
    showPointer: boolean
}

// The pointer of a prototype scene. Without the pointer (touch layouts), a click shows as a tap ring.
export const SceneCursor = ({
    position,
    isClicking,
    showPointer,
}: SceneCursorProps) => {
    if (!position) return null

    return (
        // The frame logic of each scene sends the cursor to its target CURSOR_TRAVEL_TICKS × TICK_MS
        // before a click (800 ms in all scenes). That time must be longer than this 700 ms move.
        <div
            className="pointer-events-none absolute z-20 motion-safe:transition-[left,top] motion-safe:duration-700 motion-safe:ease-in-out"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
        >
            {!showPointer && isClicking && (
                <span className="absolute -left-[0.8em] -top-[0.8em] size-[1.6em] rounded-full bg-white/30 motion-safe:animate-ping" />
            )}
            {showPointer && (
                <svg
                    viewBox="0 0 24 24"
                    className={`size-[1.6em] transition-transform duration-100 ${
                        isClicking ? 'scale-75' : ''
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
