import styled, { css } from "styled-components";
import { DEFAULT_WHITE, LIGHT_NAVY, BACKGROUND_GRAY, DEFAULT_BLACK, NAV_GRAY } from "../../../../consts/ColorCodes";
import DetailSubTitle from "../../components/DetailSubTitle";
import DetailTitle from "../../components/DetailTitle";
import InputBox from "../../components/InputBox";
import SubContents from "../../components/SubContents";
import VotePreview from "./VotePreview";
import { Link } from "react-router-dom";

export default function AgendaDetail() {

    const Wrapper = styled.div`
        margin: 30px;
    `

    const InfoWrap = styled.div`
        background-color: ${DEFAULT_WHITE};
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 30px;
    `

    const SubTitleWrap = styled.div`
        border-bottom: solid 1px ${BACKGROUND_GRAY};
        padding-bottom: 7px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    const SubTitle = styled.p`
        font-size: 22px;
        font-weight: 600;
        color: ${DEFAULT_BLACK};
        margin-right: 30px;
    `

    const DetailLink = styled(Link)`
        text-decoration: none;
        color: ${NAV_GRAY};
        font-size: 13px;
    `

    const SubForm = styled.form`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    `

    const SubmitButton = styled.button`
        width: 20%;
        height: 35px;
        background-color: ${LIGHT_NAVY};
        color: ${DEFAULT_WHITE};
        border-radius: 5px;
    `
    
    const VoteData = {
        AGREE : 5,
        DISAGREE : 42,
        ABSTENTION : 8
    }

    const linkText = "자세히 보기 >"

    return (
        <Wrapper>
            <InfoWrap>
                <DetailTitle title="선거세칙 개정안" activate="NOT_STARTED" />       
            </InfoWrap>
            <InfoWrap>
                <SubTitleWrap>
                    <SubTitle>투표 현황</SubTitle>
                    <DetailLink to="/meeting/3/1/vote">{linkText}</DetailLink>
                </SubTitleWrap>
                <VotePreview data={VoteData} />
            </InfoWrap>
            <InfoWrap>
                <DetailSubTitle subtitle="의결식 (%)" />
                <SubContents>
                    <SubForm>
                        <InputBox width="79%" placeholder=" %" />
                        <SubmitButton>적용</SubmitButton>
                    </SubForm>
                </SubContents>
            </InfoWrap>
        </Wrapper>
    )
}