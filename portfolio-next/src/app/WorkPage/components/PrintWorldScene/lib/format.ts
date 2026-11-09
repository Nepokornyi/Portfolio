export const formatMarketCap = (thousands: number) =>
    thousands >= 1000
        ? `$${(thousands / 1000).toFixed(2)}M`
        : `$${thousands.toFixed(1)}K`

export const formatTokenAmount = (amount: number) =>
    amount >= 1_000_000
        ? `${(amount / 1_000_000).toFixed(2)}M`
        : `${(amount / 1000).toFixed(2)}K`

export const formatChange = (change: number) =>
    `${change >= 0 ? '+' : ''}${(change * 100).toFixed(1)}%`

export const formatDollars = (dollars: number) => `$${dollars.toFixed(2)}`

export const formatSignedDollars = (dollars: number) =>
    `${dollars >= 0 ? '+' : '-'}${formatDollars(Math.abs(dollars))}`
