import { formatCrowns } from '@/app/WorkPage/lib/format'

// 12000 -> "+12 000 Kč". A paint without a surcharge is "Included".
export const formatSurcharge = (crowns: number) =>
    crowns === 0 ? 'Included' : `+${formatCrowns(crowns)}`
