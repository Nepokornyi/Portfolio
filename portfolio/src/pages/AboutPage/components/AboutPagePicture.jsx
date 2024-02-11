import React from 'react'

import photo from '../../../assets/static/photo.png'
import styled from 'styled-components'

const StyledImageContainer = styled.div`
    width: 100%;
    height: 100%;
    @media (min-width: 800px) {
        grid-area: 1 / 2 / 3 / 2;
    }
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    border-left: ${(props) => props.theme.border};
    object-fit: cover;
    object-position: center;
`

export const AboutPagePicture = () => {
    return (
        <StyledImageContainer>
            <StyledImage src={photo} alt="photo" />
        </StyledImageContainer>
    )
}
