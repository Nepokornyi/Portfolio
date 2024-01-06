import React from 'react'
import styled from 'styled-components'

const StyledHamburgerIcon = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 27px;
    height: 27px;
    cursor: pointer;

    div {
        width: 27px;
        height: 2px;
        background-color: #fff;
        transition-duration: 300ms;
    }

    &:hover div {
        &:first-child {
            position: absolute;
            top: 50%;
            transform: rotate(45deg);
        }

        &:nth-child(2) {
            opacity: 0;
            transform: translateX(20px);
        }

        &:nth-child(3) {
            position: absolute;
            top: 50%;
            transform: rotate(-45deg);
        }
    }
`

export const HamburgerIcon = () => {
    return (
        <StyledHamburgerIcon>
            <div />
            <div />
            <div />
        </StyledHamburgerIcon>
    )
}
