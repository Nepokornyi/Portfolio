// Dot positions of the portrait head, made from a photo and its depth map

export type Shape = {
    positions: Float32Array // x, y, z of each dot
    brightness: Float32Array
}

// World units — the head is centered on 0. The shader sweeps the scan line over this height
const HEAD_HEIGHT = 2.6
const HEAD_DEPTH = 0.8

const pickPixels = (weights: Float32Array, count: number) => {
    const runningSums = new Float64Array(weights.length)
    let sum = 0
    weights.forEach((weight, pixel) => {
        sum += weight
        runningSums[pixel] = sum
    })

    const picked = new Uint32Array(count)
    for (let dot = 0; dot < count; dot++) {
        // Binary search for the first pixel whose running sum passes a random target
        const target = Math.random() * sum
        let low = 0
        let high = weights.length - 1
        while (low < high) {
            const middle = (low + high) >> 1
            if (runningSums[middle] < target) low = middle + 1
            else high = middle
        }
        picked[dot] = low
    }
    return picked
}

const pixelsToPositions = (
    picked: Uint32Array,
    imageWidth: number,
    height: number,
    getZ: (pixel: number) => number,
) => {
    const positions = new Float32Array(picked.length * 3)
    picked.forEach((pixel, dot) => {
        positions[dot * 3] = (pixel % imageWidth) + Math.random()
        positions[dot * 3 + 1] = -(
            Math.floor(pixel / imageWidth) + Math.random()
        )
        positions[dot * 3 + 2] = getZ(pixel)
    })

    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    for (let index = 0; index < positions.length; index += 3) {
        minX = Math.min(minX, positions[index])
        maxX = Math.max(maxX, positions[index])
        minY = Math.min(minY, positions[index + 1])
        maxY = Math.max(maxY, positions[index + 1])
    }
    const scale = height / (maxY - minY)
    for (let index = 0; index < positions.length; index += 3) {
        positions[index] = (positions[index] - (minX + maxX) / 2) * scale
        positions[index + 1] =
            (positions[index + 1] - (minY + maxY) / 2) * scale
    }
    return positions
}

const getPercentile = (histogram: Float64Array, fraction: number) => {
    const total = histogram.reduce((sum, count) => sum + count, 0)
    let below = 0
    for (let level = 0; level < histogram.length; level++) {
        below += histogram[level]
        if (below >= total * fraction) return level / 255
    }
    return 1
}

const stretch = (value: number, low: number, high: number) =>
    Math.min(Math.max((value - low) / (high - low), 0), 1)

// `depthMap`: gray = depth (white = near), alpha = where the head is. Same size as `photo`.
export const createHead = (
    photo: ImageData,
    depthMap: ImageData,
    count: number,
): Shape => {
    const pixelCount = photo.width * photo.height
    const mask = new Float32Array(pixelCount)
    const luminance = new Float32Array(pixelCount)
    const luminanceHistogram = new Float64Array(256)
    const depthHistogram = new Float64Array(256)

    for (let pixel = 0; pixel < pixelCount; pixel++) {
        const red = photo.data[pixel * 4]
        const green = photo.data[pixel * 4 + 1]
        const blue = photo.data[pixel * 4 + 2]
        mask[pixel] = depthMap.data[pixel * 4 + 3] / 255
        luminance[pixel] = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255
        // Only the head counts, not the background
        luminanceHistogram[Math.round(luminance[pixel] * 255)] += mask[pixel]
        depthHistogram[depthMap.data[pixel * 4]] += mask[pixel]
    }

    const darkest = getPercentile(luminanceHistogram, 0.02)
    const brightest = getPercentile(luminanceHistogram, 0.98)
    const farthest = getPercentile(depthHistogram, 0.02)
    const nearest = getPercentile(depthHistogram, 0.99)

    const weights = new Float32Array(pixelCount)
    for (let pixel = 0; pixel < pixelCount; pixel++) {
        luminance[pixel] = stretch(luminance[pixel], darkest, brightest)
        // Bright pixels get more dots: the face gets the most detail, hair and shirt still get some
        weights[pixel] = mask[pixel] * (0.2 + 0.8 * luminance[pixel])
    }

    const picked = pickPixels(weights, count)
    const positions = pixelsToPositions(
        picked,
        photo.width,
        HEAD_HEIGHT,
        (pixel) =>
            (stretch(depthMap.data[pixel * 4] / 255, farthest, nearest) - 0.5) *
            HEAD_DEPTH,
    )
    // The photo is dark: lift the mid-tones, so more of the face reaches the bright colors
    const brightness = Float32Array.from(picked, (pixel) =>
        Math.pow(luminance[pixel], 0.7),
    )
    return { positions, brightness }
}
