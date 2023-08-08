import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { DEFAULT_WHITE } from "../../consts/ColorCodes";

export default function Header() {

    let location = useLocation();
    let title = getTitle(location.pathname)
    
    const Header = styled.div`
        width: 100%;
        height: 80px;
        box-shadow: 0px 4px 12px rgba(1,1,1,0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${DEFAULT_WHITE};
    `
    
    const Title = styled.p`
        width : 100%;
        margin: 0px 30px 0px 30px;
        font-size: 26px;
        font-weight: 700;
    `

    return (
        <Header>
            <Title>
                {title}
            </Title>
        </Header>
    )
}

function getTitle(path) {
    if (path.startsWith("/user")) {
        return "대의원 관리";
    } else if(path.startsWith("/meeting")) {
        return "정기 총회 관리";
    }

    return "Paran Admin"
}