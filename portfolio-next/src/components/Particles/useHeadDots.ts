import { useEffect, useState } from 'react'
import portrait from '@/assets/static/portrait.png'
// Made once from portrait.png. Gray = depth (white = near), alpha = where the dots go.
// Mask: macOS Vision foreground mask, shrunk by 4 px (the depth model makes the outline soft
// and far away), faded out over the bottom 30%. Depth: Depth Anything V2 Small — Apache-2.0;
// the Base and Large models are non-commercial, so do not swap them in.
import portraitDepth from '@/assets/static/portraitDepth.png'
import { createHead, Shape } from './shapes'

export type HeadDots = Shape & {
    random: Float32Array // a fixed 0..1 value for each dot
}

const loadImageData = async (url: string, width: number, height: number) => {
    const image = new Image()
    image.src = url
    await image.decode()
    const context = new OffscreenCanvas(width, height).getContext('2d', {
        willReadFrequently: true,
    })
    if (!context) throw new Error('No 2D canvas context')
    context.drawImage(image, 0, 0, width, height)
    return context.getImageData(0, 0, width, height)
}

const buildHeadDots = async (count: number): Promise<HeadDots> => {
    const { width, height } = portrait
    const [photo, depthMap] = await Promise.all([
        loadImageData(portrait.src, width, height),
        loadImageData(portraitDepth.src, width, height),
    ])
    return {
        ...createHead(photo, depthMap, count),
        random: Float32Array.from({ length: count }, Math.random),
    }
}

export const useHeadDots = (count: number) => {
    const [headDots, setHeadDots] = useState<HeadDots | null>(null)

    useEffect(() => {
        let isCancelled = false
        buildHeadDots(count)
            .then((built) => {
                if (!isCancelled) setHeadDots(built)
            })
            .catch((error) =>
                console.error('Particles: portrait images did not load', error),
            )
        return () => {
            isCancelled = true
        }
    }, [count])

    return headDots
}
