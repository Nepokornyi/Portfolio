import React from 'react'
import styled from 'styled-components'

const MainHeading = styled.h1`
    font-size: ${(props) => props.theme.text.heading.variant1};
    line-height: 125%;
    letter-spacing: 8px;
    margin-bottom: 15px;
`

const SubHeading = styled.h2`
    font-size: ${(props) => props.theme.text.heading.variant2};
    font-weight: 400;
`

const ChapterHeading = styled.h3`
    font-size: ${(props) => props.theme.text.heading.variant3};
    font-weight: 400;
    padding: 30px;
`

export const Heading = ({ variant = 'primary', children }) => {
    return (
        <>
            {variant === 'primary' && <MainHeading>{children}</MainHeading>}
            {variant === 'secondary' && <SubHeading>{children}</SubHeading>}
            {variant === 'chapter' && (
                <ChapterHeading>{children}</ChapterHeading>
            )}
        </>
    )
}
