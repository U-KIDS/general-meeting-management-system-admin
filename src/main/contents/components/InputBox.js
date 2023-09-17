import styled from "styled-components"
import { BACKGROUND_GRAY, DEFAULT_BLACK, NAV_GRAY } from "../../../consts/ColorCodes"


const Input = styled.input`
        width: ${(props) => props. width};
        height: 35px;
        border-radius: 5px;
        padding: 0px 15px;
        box-sizing: border-box;
        outline: none;
        color: ${DEFAULT_BLACK};
    `

export default function InputBox(props) {

    
    return (
        <Input 
            value={props.value} 
            type={props.type} 
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
            width={props.width}>
        </Input>
    )
}