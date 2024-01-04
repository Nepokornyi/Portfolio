import React from 'react'
import styled from 'styled-components'

export const MainHeading = styled.h1`
    font-size: clamp(22px, 5vw, 80px);
    line-height: 125%;
    letter-spacing: 8px;
    margin-bottom: 15px;
`

export const SubHeading = styled.h2`
    font-size: clamp(13px, 1.5vw, 20px);
    font-weight: 400;
`

export const Heading = ({
    variant = 'primary',
    children
}) => {
    return (
        <>
            {variant === 'primary' ? (
                <MainHeading>{children}</MainHeading>
            ) : (
                <SubHeading>{children}</SubHeading>
            )}
        </>
    )
}
