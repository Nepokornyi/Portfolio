import React from 'react'
import styled from 'styled-components'

const MainHeading = styled.h1`
    font-size: clamp(22px, 5vw, 80px);
    line-height: 125%;
    letter-spacing: 8px;
    margin-bottom: 15px;
`

const SubHeading = styled.h2`
    font-size: clamp(13px, 1.5vw, 20px);
    font-weight: 400;
`

const TitleHeading = styled.h3`
    font-size: clamp(20px, 1.5vw, 36px);
    font-weight: 400;
    padding: 30px;
`

export const Heading = ({ variant = 'primary', children }) => {
    return (
        <>
            {variant === 'primary' && <MainHeading>{children}</MainHeading>}
            {variant === 'secondary' && <SubHeading>{children}</SubHeading>}
            {variant === 'title' && <TitleHeading>{children}</TitleHeading>}
        </>
    )
}
