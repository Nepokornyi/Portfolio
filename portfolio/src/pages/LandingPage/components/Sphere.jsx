import React from 'react'

import icoSphere from '../../../assets/static/Sphere.png'
import styled from 'styled-components'

const StyledSphere = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 75%;
    object-fit: contain;
    z-index: -1;
`

export const Sphere = () => {
    return <StyledSphere src={icoSphere} alt="sphere" />
}
