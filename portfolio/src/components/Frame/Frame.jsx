import styled from 'styled-components'
import { useLayoutBreakpoint } from '../../hooks/useWindowDimension'

//* I used grid instead of flex because it allowed me to fill 100% of a min-height of a parent element
//* it didn't work with flex. Also grid requires less styling

const MainContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: ${(props) =>
        props.$expand ? '100vh' : 'auto'};
    display: grid;
    padding: clamp(25px, 6.5vw, 100px)
        clamp(25px, 10vw, 250px);
    //* This is used to match line to padding and create 3d rectangle
    //! try remove it to see what it does
    overflow: hidden;
`

const MobileContainer = styled.section`
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
`

const StyledFrameRectangle = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid rgba(166, 234, 255, 0.25);
    display: grid;
    place-items: center;
    & .line {
        position: absolute;
        width: 100%;
        border: 1px solid rgba(166, 234, 255, 0.25);
    }
    & .top-head {
        top: clamp(-127px, -6.63vw, -27px);
        left: clamp(-262px, -11.2vw, -45px);
    }
    & .top-left {
        top: 0px;
        left: -2px;
        transform-origin: top left;
        transform: rotate(-150deg);
    }
    & .top-right {
        top: -2px;
        right: 0px;
        transform-origin: top right;
        transform: rotate(30deg);
    }
    & .bottom-left {
        bottom: 1px;
        left: -1px;
        transform-origin: bottom left;
        transform: rotate(-150deg);
    }
`

const FrameRectangle = ({ children }) => {
    return (
        <StyledFrameRectangle>
            <div className="line top-head" />
            <div className="line top-left" />
            <div className="line top-right" />
            <div className="line bottom-left" />
            {children}
        </StyledFrameRectangle>
    )
}

export const Frame = ({ header, children }) => {
    const layoutBreakpoint = useLayoutBreakpoint()

    return (
        <>
            {layoutBreakpoint ? (
                <MainContainer $expand>
                    <FrameRectangle>
                        {header}
                        {children}
                    </FrameRectangle>
                </MainContainer>
            ) : (
                <MobileContainer>
                    <MainContainer>
                        <FrameRectangle>
                            {header}
                        </FrameRectangle>
                    </MainContainer>
                    <MainContainer>
                        <FrameRectangle>
                            {children}
                        </FrameRectangle>
                    </MainContainer>
                </MobileContainer>
            )}
        </>
    )
}
