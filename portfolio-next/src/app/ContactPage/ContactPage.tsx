import { Button } from '@/components/Button/Button'
import { CodeBlock } from '@/components/CodeEditor/CodeEditor'
import { FlexContainer } from '@/components/FlexContainer/FlexContainer'
import { Frame } from '@/components/Frame/Frame'
import { Glow } from '@/components/Glow/Glow'
import { Input } from '@/components/Input/Input'
import { SocialIcons } from '@/components/SocialIcons/SocialIcons'
import { SectionHeadline } from '@/components/Text/components/TextVariants'
import { Textarea } from '@/components/Textarea/Textarea'
import React from 'react'
// import { CodeEditor } from '@/components/CodeEditor/CodeEditor'

export const ContactPage = () => {
    return (
        <Frame header={<SectionHeadline>{'<contact me>'}</SectionHeadline>}>
            <SectionHeadline className="hidden lg:block">
                {'<contact me>'}
            </SectionHeadline>
            <FlexContainer className="flex-col lg:flex-row">
                <FlexContainer flexDirection="flex-col">
                    <FlexContainer className="flex-col my-6">
                        <Input
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Elon Musk"
                        />
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="elonmusk@domain.com"
                        />
                        <Textarea />
                    </FlexContainer>

                    <FlexContainer className="items-center justify-between px-6 lg:px-12">
                        <SocialIcons />
                        <FlexContainer width="w-fit" className="relative">
                            <Button>send</Button>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>

                <FlexContainer className="relative items-center justify-center">
                    <Glow
                        color="rgba(7, 117, 189, 0.4)"
                        blur="blur-[120px]"
                        className="inset-0"
                    />
                    <CodeBlock />
                </FlexContainer>
            </FlexContainer>
        </Frame>
    )
}
