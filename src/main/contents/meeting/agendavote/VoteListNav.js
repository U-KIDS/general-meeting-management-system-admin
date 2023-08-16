import { styled } from "styled-components";
import { css } from "styled-components";
import { NAV_GRAY } from "../../../../consts/ColorCodes";

export default function VoteListNav() {
    const VoteElementNav = styled.div`
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    `

    const SizeStyle = css`
    ${(props) =>
        css`
            width: ${props.size};
        `
    }
    `

    const VoteElement = styled.p`
        color: ${NAV_GRAY};
        text-align: center;
        margin: 0px 30px 0px 30px;
        font-weight: 600;
        font-size: 14px;

        ${SizeStyle}
    `

    return (
        <VoteElementNav>
            <VoteElement size="200px">제목</VoteElement>
            <VoteElement size="80px">결과</VoteElement>
            <VoteElement size="100px">학번</VoteElement>
            <VoteElement size="300px">학과</VoteElement>
        </VoteElementNav>
    )
}