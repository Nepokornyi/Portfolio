'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { SectionHeadline } from '@/components/Text/components/TextVariants'

type WorkDialogProps = {
    title: string
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export const WorkDialog = ({
    title,
    isOpen,
    onClose,
    children,
}: WorkDialogProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        if (isOpen && !dialog.open) dialog.showModal()
        if (!isOpen && dialog.open) dialog.close()
    }, [isOpen])

    return (
        <dialog
            ref={dialogRef}
            aria-label={title}
            onClose={onClose}
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose()
            }}
            className="m-auto h-dvh w-screen max-h-none max-w-none border-primary-hairline bg-primary-background text-inherit backdrop:bg-black/70 backdrop:backdrop-blur-sm lg:h-[min(calc(100dvh-4rem),800px)] lg:w-[calc(100%-4rem)] lg:max-w-[1280px] lg:border"
        >
            {isOpen && (
                <div className="flex h-full flex-col">
                    <div className="flex shrink-0 items-center justify-between border-b border-primary-hairline">
                        <SectionHeadline className="my-5 lg:my-6">
                            {`<${title}>`}
                        </SectionHeadline>
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={onClose}
                            className="mx-6 p-2 text-primary-stroke transition-colors hover:text-primary-text lg:mx-12"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden
                                className="size-6 lg:size-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M5 5l14 14M19 5L5 19" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto lg:overflow-hidden">
                        {children}
                    </div>
                </div>
            )}
        </dialog>
    )
}
