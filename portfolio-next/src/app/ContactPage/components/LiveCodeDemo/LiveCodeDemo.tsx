'use client'

import { useRef } from 'react'
import { demoFormFields } from '@/app/ContactPage/const'
import { useTypingLoop } from '@/app/ContactPage/hooks/useTypingLoop'
import {
    buildCodeTokens,
    getTypedFields,
    sliceTokens,
} from '@/app/ContactPage/lib/demoCode'
import { BrowserWindow } from './BrowserWindow'
import { EditorWindow } from './EditorWindow'

const codeTokens = buildCodeTokens(demoFormFields)
const codeLength = codeTokens.reduce((sum, token) => sum + token.text.length, 0)

export const LiveCodeDemo = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const typedCount = useTypingLoop(containerRef, codeLength)
    const typedTokens = sliceTokens(codeTokens, typedCount)
    const typedFields = getTypedFields(demoFormFields, typedTokens)

    return (
        <div
            ref={containerRef}
            aria-hidden
            className="w-full max-w-[540px]"
            style={{ containerType: 'inline-size' }}
        >
            <div
                className="relative aspect-[540/420]"
                style={{ fontSize: '2.2cqw' }}
            >
                <EditorWindow
                    tokens={typedTokens}
                    className="absolute left-0 top-0 h-[62%] w-[81%]"
                />
                <BrowserWindow
                    fields={typedFields}
                    className="absolute bottom-0 right-0 h-[62%] w-[81%]"
                />
            </div>
        </div>
    )
}
