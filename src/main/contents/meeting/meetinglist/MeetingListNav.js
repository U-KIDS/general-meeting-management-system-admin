import { styled } from "styled-components";
import { css } from "styled-components";
import { NAV_GRAY } from "../../../../consts/ColorCodes";

export default function MeetingListNav() {
    const MeetingElementNav = styled.div`
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

    const MeetingElement = styled.p`
        color: ${NAV_GRAY};
        text-align: center;
        margin: 0px 30px 0px 30px;
        font-weight: 600;
        font-size: 14px;

        ${SizeStyle}
    `

    return (
        <MeetingElementNav>
            <MeetingElement size="250px">제목</MeetingElement>
            <MeetingElement size="80px">상태</MeetingElement>
            <MeetingElement size="170px">주최</MeetingElement>
            <MeetingElement size="220px">일시</MeetingElement>
        </MeetingElementNav>
    )
}