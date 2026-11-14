// 4500000 -> "4 500 000 Kč". The spaces are non-breaking, so an amount stays on one line.
export const formatCrowns = (crowns: number) =>
    `${String(Math.round(crowns)).replace(/\B(?=(\d{3})+$)/g, '\u00a0')}\u00a0Kč`
