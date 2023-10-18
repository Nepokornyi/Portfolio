import styled from 'styled-components';

export const FrameRectangle = styled.div`
    width: 80%;
    height: 75%;
    border: 1px solid rgba(166, 234, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    & .line {
        position: absolute;
        width: 100%;
        border: 1px solid rgba(166, 234, 255, 0.15);
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
`;

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

