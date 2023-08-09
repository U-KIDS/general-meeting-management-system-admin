import styled, { css } from "styled-components"
import { NAV_GRAY } from "../../../../consts/ColorCodes"

export default function UseListNav() {

    const UserElementNav = styled.div`
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

    const NavElement = styled.p`
        color: ${NAV_GRAY};
        text-align: center;
        margin: 0px 30px 0px 30px;
        font-weight: 600;
        font-size: 14px;

        ${SizeStyle}
    `

    return (
        <UserElementNav>
            <NavElement size="100px">이름</NavElement>
            <NavElement size="100px">상태</NavElement>
            <NavElement size="120px">학번</NavElement>
            <NavElement size="80px">학년</NavElement>
            <NavElement size="150px">단과대학</NavElement>
            <NavElement size="200px">학과</NavElement>
        </UserElementNav>
    )
}