import styled from "styled-components";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import { BACKGROUND_GRAY } from "../consts/ColorCodes";

export default function Main() {
 
    const Wrapper = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex; 
        flex-direction: row;
        overflow: hidden;
    `
    const ContentsWrap = styled.div`
        width: 100%;
        height: 100%;
        background-color: ${BACKGROUND_GRAY};
        display: flex;
        flex-direction: column;
    `

    const Content = styled.div`
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    `

    return (
        <Wrapper>
            <Sidebar />
            <ContentsWrap>
                <Header />
                <Content>
                    <Outlet />    
                </Content>
            </ContentsWrap>
        </Wrapper>
    )
}