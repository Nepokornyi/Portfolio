import styled from 'styled-components'

const StyledButton = styled.button`
    position: relative;
    padding: clamp(5px, 1.25vw, 10px) clamp(7.5px, 1.25vw, 15px);
    color: #000;
    background-color: ${(props) => props.color || 'white'};
    border: none;
    cursor: pointer;
    font-size: ${(props) => props.theme.text.body.variant1};
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
`

export const Button = ({ color = '#ffd600', children, className }) => {
    return (
        <StyledButton color={color} className={className}>
            {children}
        </StyledButton>
    )
}
