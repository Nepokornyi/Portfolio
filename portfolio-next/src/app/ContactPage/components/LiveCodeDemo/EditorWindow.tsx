import { CodeToken, CodeTokenKind } from '@/app/ContactPage/types'
import { AppWindow } from './AppWindow'

const tokenColors: Record<CodeTokenKind, string> = {
    plain: 'text-primary-text',
    component: 'text-primary-blue',
    prop: 'text-primary-green',
    value: 'text-primary-light-green',
}

type EditorWindowProps = {
    tokens: CodeToken[]
    className?: string
}

export const EditorWindow = ({ tokens, className }: EditorWindowProps) => (
    <AppWindow
        className={className}
        title={
            <span className="ml-[1.5em] self-end border border-b-0 border-primary-hairline bg-primary-input-background px-[1em] py-[0.2em] text-[0.8em]">
                <span className="opacity-60">index.jsx</span>
            </span>
        }
    >
        <div className="whitespace-pre p-[1.2em] text-[0.85em] leading-[1.7]">
            {tokens.map((token, index) => (
                <span key={index} className={tokenColors[token.kind]}>
                    {token.text}
                </span>
            ))}
            <span className="inline-block h-[1.2em] border-l border-primary-text align-text-bottom motion-safe:animate-blink" />
        </div>
    </AppWindow>
)
