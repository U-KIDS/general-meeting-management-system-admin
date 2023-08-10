import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function ListCreateLink(props) {

    const CreateLink = styled(Link)`
        display: block;
        height: 60px;
        border: 2px solid #D9D9D9;
        border-radius: 10px;
        width: 100%;
        text-align: center;
        font-size: 26px;
        text-decoration: none;
        color: #D9D9D9;
        line-height: 60px;
    `

    return (
        <CreateLink to={props.to}>
            +
        </CreateLink>
    )
}