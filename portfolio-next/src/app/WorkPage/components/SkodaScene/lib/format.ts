import { formatCrowns } from '@/app/WorkPage/lib/format'

export const formatSurcharge = (crowns: number) =>
    crowns === 0 ? 'Included' : `+${formatCrowns(crowns)}`
