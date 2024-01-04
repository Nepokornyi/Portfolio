import styled from 'styled-components'

import icoLogo from '../../assets/static/icoLogo.png'
import { useLayoutBreakpoint } from '../../hooks/useWindowDimension'
import { HamburgerIcon } from './HamburgerIcon'

//* This one is used to add blur to icon

const LogoWrapper = styled.div`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0775bd;
        filter: blur(40px);
    }
`

const Navigation = styled.nav`
    position: ${(props) =>
        props.$primary ? 'absolute' : 'relative'};
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`

export const Header = ({ children }) => {
    const primary = useLayoutBreakpoint()

    return (
        <Navigation $primary={primary}>
            <LogoWrapper>
                <img src={icoLogo} alt="Logo image" />
            </LogoWrapper>
            {primary ? (
                <ul>{children}</ul>
            ) : (
                <HamburgerIcon />
            )}
        </Navigation>
    )
}
