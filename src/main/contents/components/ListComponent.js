import styled from "styled-components"
import { Link } from "react-router-dom"
import { DEFAULT_WHITE } from "../../../consts/ColorCodes"

export default function ListComponent(props) {

    const Wrapper = styled(Link)`
        text-decoration: none;
        display: block;
        width: 100%;
        height: 70px;
        background-color: ${DEFAULT_WHITE};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        transition: .2s;

        &:hover{
            transform: translateY(-2%);
        }
    `
    
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}