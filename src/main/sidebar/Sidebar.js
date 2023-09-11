import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { DEFAULT_WHITE, PARAN_NAVY, LIGHT_NAVY } from "../../consts/ColorCodes"
import paran_logo from "../../images/paran_logo.png"

export default function Sidebar() {

    const Wrapper = styled.div`
        width: 200px;
        height: 100vh;
        background-color: ${PARAN_NAVY};
    `

    const Logo = styled.div`
        width: 100px;
        margin: auto;
        padding: 50px 50px 50px 50px;
    `

    const LogoImage = styled.img`
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    `

    const LogoText = styled.p`
        color: ${DEFAULT_WHITE};
        font-size: 12px;
        font-weight: 300;
        text-align: center;
        margin: 2px 0px 2px 0px;
    `

    const MenuLink = styled(NavLink)`
        display: block;
        width: 180px;
        text-align: center;
        color: ${DEFAULT_WHITE};
        margin: 0px 10px 45px 10px;
        padding: 5px 0px 5px 0px;
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        border-radius: 5px;
        transition: .2s;
        &:hover {
            background-color: ${LIGHT_NAVY};
        }
        
    `

    const DesignedBy = styled.p`
        position: absolute;
        bottom: 20px;
        width: 200px;
        text-align: center;
        color: ${DEFAULT_WHITE};
        font-size: 12px;
        font-weight: 300;
    `

    const ActivateStyle = {
        backgroundColor: `${LIGHT_NAVY}`,
    }

    return (
        <Wrapper>
            <Logo>
                <LogoImage alt="총대의원회 파란 로고" src={paran_logo}></LogoImage>
                <LogoText>39대 총대의원회</LogoText>
                <LogoText>파란</LogoText>
            </Logo>
            <MenuLink to='/user' style={({isActive}) => (isActive ? ActivateStyle : undefined)}>대의원 관리</MenuLink>
            <MenuLink to='/meeting' style={({isActive}) => (isActive ? ActivateStyle : undefined)}>정기총회 관리</MenuLink>
            <MenuLink to='/overview' >송출 페이지</MenuLink>
            <MenuLink to='/login'>로그아웃</MenuLink>
            <DesignedBy>Liklion SCH 2023</DesignedBy>
        </Wrapper>
    )
}