import { styled } from "styled-components";
import { css } from "styled-components";
import { NAV_GRAY } from "../../../../consts/ColorCodes";

export default function AgendaListNav() {
    
    const AgendaElementNav = styled.div`
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

    const AgendaElement = styled.p`
        color: ${NAV_GRAY};
        text-align: center;
        margin: 0px 30px 0px 30px;
        font-weight: 600;
        font-size: 14px;

        ${SizeStyle}
    `
    
    return (
        <AgendaElementNav>
            <AgendaElement size="600px;">주제</AgendaElement>
            <AgendaElement size="80px;">상태</AgendaElement>
            <AgendaElement size="0px;"></AgendaElement>
        </AgendaElementNav>
    )
}