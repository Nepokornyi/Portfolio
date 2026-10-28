'use client'

import dynamic from 'next/dynamic'

// three.js is heavy — load it after the page so the headline shows first
export const HeroScene = dynamic(
    () => import('./HeroCanvas').then((module) => module.HeroCanvas),
    { ssr: false },
)
