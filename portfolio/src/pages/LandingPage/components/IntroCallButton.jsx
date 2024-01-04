import styled from 'styled-components'
import { Button } from '../../../components/Button/Button'

export const IntroCallButton = styled(Button)`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0 clamp(25px, 2.5vw, 50px)
        clamp(25px, 2.5vw, 50px) 0;
`
