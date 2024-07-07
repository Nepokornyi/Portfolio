'use client'
import React from 'react'

export const HamburgerMenu = () => {
    return (
        <div className="flex flex-col gap-1.5 cursor-pointer">
            <div className="w-[32px] h-[2px] bg-primary-stroke" />
            <div className="w-[32px] h-[2px] bg-primary-stroke" />
            <div className="w-[32px] h-[2px] bg-primary-stroke" />
        </div>
    )
}
