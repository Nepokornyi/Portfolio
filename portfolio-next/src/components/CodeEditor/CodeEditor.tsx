'use client'
import React, { useEffect, useRef, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
// Optionally, import plugins for line numbers, toolbar, etc.
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const code = `export const Form = () => {
    return (
      <Layout>
        <form onSubmit={handleSubmit}>
          <Input name="name" />
          <Input name="email" />
          <Button type="submit">Submit</Button>
        </form>
      </Layout>
    );
};`

export const CodeBlock = () => {
    const [displayedCode, setDisplayedCode] = useState('')
    const codeRef = useRef<HTMLElement>(null)

    useEffect(() => {
        let currentIndex = 0
        let typingSpeed = 15
        let pauseAfterFinish = 2000

        const type = () => {
            if (currentIndex <= code.length) {
                setDisplayedCode(code.slice(0, currentIndex))
                currentIndex++
                setTimeout(type, typingSpeed)
            }
            // else {
            //     setTimeout(() => {
            //         currentIndex = 0
            //         setDisplayedCode('')
            //         setTimeout(type, typingSpeed)
            //     }, pauseAfterFinish)
            // }
        }

        type()

        return () => {
            currentIndex = code.length + 1
        }
    }, [code])

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current)
        }
    }, [displayedCode])

    return (
        <div className="code-block-container">
            <pre className="line-numbers">
                <code ref={codeRef} className="language-jsx">
                    {displayedCode}
                </code>
            </pre>
        </div>
    )
}
