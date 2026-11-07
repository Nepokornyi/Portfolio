import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/app/hooks/useShouldAnimate'

const SCRAMBLE_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789#%&*+=/?'
const FRAME_MS = 40
const DURATION_MS = 500

const randomChar = () =>
    SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]

// Shows random characters, then reveals the real text from left to right
export const useTextScramble = (text: string) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const [displayText, setDisplayText] = useState(text)
    const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined)

    useEffect(() => () => clearInterval(intervalRef.current), [])

    const scramble = () => {
        if (prefersReducedMotion) return
        clearInterval(intervalRef.current)

        const totalFrames = DURATION_MS / FRAME_MS
        let frame = 0

        const showNextFrame = () => {
            const revealedCount = Math.floor(
                (frame / totalFrames) * text.length
            )
            if (revealedCount >= text.length) {
                clearInterval(intervalRef.current)
                setDisplayText(text)
                return
            }
            const hiddenPart = Array.from(
                { length: text.length - revealedCount },
                randomChar
            ).join('')
            setDisplayText(text.slice(0, revealedCount) + hiddenPart)
            frame++
        }

        showNextFrame()
        intervalRef.current = setInterval(showNextFrame, FRAME_MS)
    }

    return { displayText, scramble }
}
