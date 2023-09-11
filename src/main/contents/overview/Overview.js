import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"
import { BACKGROUND_GRAY, DEFAULT_WHITE, NAV_GRAY, PARAN_NAVY } from "../../../consts/ColorCodes"
import paran_logo from  "../../../images/paran_logo.png"
import { useState } from "react"

export default () => {

    const [title, setTitle] = useState("대의원 정기총회")
    const [linkTo, setLinkTo] = useState("/")

    const backLinkText = "<";

    return (
        <Wrapper>
            <Header>
                <LogoLink to="/">
                    <LogoImage alt="총대의원회 파란 로고" src={paran_logo}></LogoImage>
                </LogoLink>
                <Nav>
                    <div></div>
                    <Title>{title}</Title>
                </Nav>
            </Header>
            <UnderHeader>
                <BackLink to={linkTo}>{backLinkText}</BackLink>
            </UnderHeader>
            <Body>
                <Outlet context={{setTitle, setLinkTo}} /> 
            </Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    width: 100%;
    height: 85px;
    background-color: ${PARAN_NAVY};
`

const Body = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
`

const LogoLink = styled(Link)`
    position: absolute;
    left: 50%;
    top: 25px;
    transform:translateX(-50%);
`

const LogoImage = styled.img`
    width: 100px;
    height: 100px;
`

const Nav = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-between;
`

const BackLink = styled(Link)`
    color: ${NAV_GRAY};
    text-decoration: none;  
    font-size: 24px;
    height: 40px;
    line-height: 40px;
    margin-left: 20px;
    font-weight: 600;
`

const Title = styled.p`
    color: ${BACKGROUND_GRAY};
    height: 85px;
    line-height: 85px;
    font-size: 24px;
    margin-right: 20px;
    font-weight: 300;
`

const UnderHeader = styled.div`
    width: 100%;
    height: 40px;
`