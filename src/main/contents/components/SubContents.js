import styled from "styled-components"
import { BACKGROUND_GRAY } from "../../../consts/ColorCodes"

const Wrapper = styled.div`
    background-color: ${BACKGROUND_GRAY};
    padding: 30px;
    border-radius: 10px;
`

export default function SubContents(props) {
    
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}