'use client'

import { useRef } from 'react'
import { interBlack } from '@/app/fonts'
import { TechCloudLayout } from '../types'
import { useRowDrift } from '../hooks/useRowDrift'

type TechCloudProps = {
    layout: TechCloudLayout
    className?: string
}

export const TechCloud = ({ layout, className = '' }: TechCloudProps) => {
    const { width, height, drift, rows } = layout
    const containerRef = useRef<HTMLDivElement>(null)
    useRowDrift(containerRef, (drift / width) * 100)

    return (
        <div
            ref={containerRef}
            aria-hidden
            className={`${interBlack.className} relative w-full overflow-hidden ${className}`}
            style={{
                aspectRatio: `${width} / ${height}`,
                containerType: 'inline-size',
            }}
        >
            {rows.map((words, index) => (
                <div key={index} className="absolute inset-0">
                    {words.map((word) => (
                        <span
                            key={`${word.text}-${word.x}`}
                            className="absolute whitespace-nowrap leading-[normal] text-transparent [-webkit-text-stroke:1px_var(--color-primary-text)]"
                            style={{
                                left: `${(word.x / width) * 100}%`,
                                top: `${(word.y / height) * 100}%`,
                                fontSize: `${(word.size / width) * 100}cqw`,
                            }}
                        >
                            {word.text}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    )
}
