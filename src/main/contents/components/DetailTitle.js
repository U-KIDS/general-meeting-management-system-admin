import styled from "styled-components"
import { DEFAULT_BLACK, BACKGROUND_GRAY, DEFAULT_WHITE, NAV_GRAY } from "../../../consts/ColorCodes"
import { Link } from "react-router-dom"
import Activate from "./Activate"


export default function DetailTitle(props) {

    const Wrapper = styled.div`
        margin-bottom: 30px;
    `
    
    const TitleWrap = styled.div`
        border-bottom: solid 1px ${BACKGROUND_GRAY};
        padding-bottom: 7px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    `

    const Title = styled.p`
        font-size: 30px;
        font-weight: 700;
        color: ${DEFAULT_BLACK};
        margin-right: 30px;
    `

    const UpdateLink = styled(Link)`
        font-size: 14px;
        color: ${NAV_GRAY};
        text-decoration: none;
        margin-right: 10px;
    `

    const DeleteButton = styled.button`
        font-size: 14px;
        color: ${NAV_GRAY};
        text-decoration: none;
        background-color: ${DEFAULT_WHITE};
        cursor: pointer;
    `
    
    return (
        <Wrapper>
            <TitleWrap>
                <Title>{props.title}</Title>
                <Activate value={props.activate} />
            </TitleWrap>
            <UpdateLink to={props.updateLink}>수정</UpdateLink>
            <DeleteButton>삭제</DeleteButton>
        </Wrapper>
    )
}