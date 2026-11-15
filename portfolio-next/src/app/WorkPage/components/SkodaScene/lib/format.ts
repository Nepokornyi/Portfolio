export const formatCrowns = (crowns: number) =>
    `${String(Math.round(crowns)).replace(/\B(?=(\d{3})+$)/g, '\u00a0')}\u00a0Kč`

export const formatSurcharge = (crowns: number) =>
    crowns === 0 ? 'Included' : `+${formatCrowns(crowns)}`
