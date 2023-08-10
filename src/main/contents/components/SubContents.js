import styled from "styled-components"
import { BACKGROUND_GRAY } from "../../../consts/ColorCodes"

export default function SubContents(props) {
    
    const Wrapper = styled.div`
        background-color: ${BACKGROUND_GRAY};
        padding: 20px 30px;
        border-radius: 10px;
    `
    
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}