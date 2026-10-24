export type TechWord = {
    text: string
    x: number
    y: number
    size: number
}

export type TechCloudLayout = {
    width: number
    height: number
    drift: number
    rows: TechWord[][]
}
