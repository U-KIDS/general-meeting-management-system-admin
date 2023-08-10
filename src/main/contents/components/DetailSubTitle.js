import styled from "styled-components"
import { DEFAULT_BLACK, BACKGROUND_GRAY } from "../../../consts/ColorCodes"

export default function DetailSubTitle(props) {
    
    const Wrapper = styled.div`
        border-bottom: solid 1px ${BACKGROUND_GRAY};
        padding-bottom: 7px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
    `

    const SubTitle = styled.p`
        font-size: 22px;
        font-weight: 600;
        color: ${DEFAULT_BLACK};
        margin-right: 30px;
    `

    
    return (
        <Wrapper>
            <SubTitle>
                {props.subtitle}
            </SubTitle>
        </Wrapper>
    )
}