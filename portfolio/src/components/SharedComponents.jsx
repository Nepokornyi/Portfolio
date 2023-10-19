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

export const MainContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const MainHeading = styled.h1`
    font-size: 80px;
    font-weight: 600;
    line-height: 95%;
    letter-spacing: 8px;
    margin-bottom: 15px;
`;

export const SubHeading = styled.h2`
    font-size: 20px;
    font-weight: 400;
`;

export const CallButton = styled.button`
    min-width: 145px;
    padding: 10px 15px;
    color: #000;
    background-color: ${(props) => props.color || 'white'};
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 0.2px;
    &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 100%;
        height: 100%;
        border: 1px solid ${(props) => props.color || 'white'};
        z-index: -1;
        transition-duration: 300ms;
    }
    &:hover::before {
        top: -1px;
        left: -1px;
    }
`;
