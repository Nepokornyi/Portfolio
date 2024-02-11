import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
    font-size: ${(props) => props.theme.text.body.variant1};
    padding: 20px 30px;
    line-height: 135%;
`

export const Text = ({ children, className }) => {
    return <StyledText className={className}>{children}</StyledText>
}
