import React from 'react'
import { Text } from '../../../components/Text/Text'
import styled from 'styled-components'

const StyledDescriptionContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const StyledFooter = styled.div`
    font-size: ${(props) => props.theme.text.highlight};
    padding: 20px 30px;
    width: 100%;
    border-top: ${(props) => props.theme.border};
    text-align: center;
`

export const AboutPageDescription = () => {
    return (
        <StyledDescriptionContainer>
            <div>
                <Text>
                    As a dedicated professional in the field of web development,
                    I continually seek opportunities to expand my knowledge and
                    stay current with industry trends.
                </Text>
                <Text>
                    My passion for technology and commitment to lifelong
                    learning enable me to adapt quickly to new challenges and
                    continuously deliver quality work.
                </Text>
                <Text>
                    I excel at working both collaboratively and independently,
                    demonstrating strong problem-solving skills and initiative
                    in every project I undertake. My diverse skill set, coupled
                    with a diligent work ethic, positions me to create robust,
                    high-quality solutions that meet and exceed client
                    expectations.
                </Text>
            </div>
            <StyledFooter>Lets make things happen!</StyledFooter>
        </StyledDescriptionContainer>
    )
}
