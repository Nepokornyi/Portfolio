export type TimelineState = {
    sweep: number
    isPrint: boolean
}

// The print plays once, from the first view: the line builds the head row by row.
// Then the head stays, and from time to time a scan line passes over it
const PRINT_SECONDS = 3
const HOLD_SECONDS = 8
const SCAN_SECONDS = 2.5

export const BUILT: TimelineState = { sweep: 0, isPrint: false }

export const getTimelineState = (seconds: number): TimelineState => {
    if (seconds < PRINT_SECONDS) {
        return { sweep: seconds / PRINT_SECONDS, isPrint: true }
    }
    const loopSeconds =
        (seconds - PRINT_SECONDS) % (HOLD_SECONDS + SCAN_SECONDS)
    if (loopSeconds < HOLD_SECONDS) return BUILT
    return {
        sweep: (loopSeconds - HOLD_SECONDS) / SCAN_SECONDS,
        isPrint: false,
    }
}

export const getSecondsUntilLineMoves = (seconds: number) => {
    if (seconds < PRINT_SECONDS) return 0
    const loopSeconds =
        (seconds - PRINT_SECONDS) % (HOLD_SECONDS + SCAN_SECONDS)
    return Math.max(HOLD_SECONDS - loopSeconds, 0)
}

export const SWAY_ANGLE = 0.19
export const SWAY_SPEED = 0.3
