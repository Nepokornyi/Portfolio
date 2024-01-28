import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
    padding: 20px 30px;
    line-height: 135%;
`

export const Text = ({ children, className }) => {
    return <StyledText className={className}>{children}</StyledText>
}
