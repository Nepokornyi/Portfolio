import { useEffect, useState } from 'react'

export const getWindowDimension = () => {
    const { innerWidth: width, innerHeight: height } =
        window
    return { width, height }
}

export const useWindowDimension = () => {
    const [dimensions, setDimensions] = useState(
        getWindowDimension()
    )

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getWindowDimension())
        }

        window.addEventListener('resize', handleResize)
        return () =>
            window.removeEventListener(
                'resize',
                handleResize
            )
    }, [])

    return dimensions
}

export const useLayoutBreakpoint = () => {
    const { width } = useWindowDimension()
    return width >= 800
}
