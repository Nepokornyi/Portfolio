const twoUnits = (
    larger: number,
    largerUnit: string,
    smaller: number,
    smallerUnit: string,
) =>
    smaller > 0
        ? `${larger}\u00a0${largerUnit}\u00a0${smaller}\u00a0${smallerUnit}`
        : `${larger}\u00a0${largerUnit}`

export const formatDuration = (hours: number) => {
    const totalMinutes = Math.round(hours * 60)
    if (totalMinutes < 60) return `${totalMinutes}\u00a0min`
    if (totalMinutes < 24 * 60)
        return twoUnits(
            Math.floor(totalMinutes / 60),
            'h',
            totalMinutes % 60,
            'min',
        )

    const totalHours = Math.round(totalMinutes / 60)
    return twoUnits(Math.floor(totalHours / 24), 'd', totalHours % 24, 'h')
}

export const formatPercent = (percent: number) => `${percent.toFixed(1)}%`
