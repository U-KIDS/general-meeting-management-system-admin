import styled from "styled-components";
import { DEFAULT_WHITE, LIGHT_NAVY } from "../../../../consts/ColorCodes";
import DetailSubTitle from "../../components/DetailSubTitle";
import DetailTitle from "../../components/DetailTitle";
import InputBox from "../../components/InputBox";
import SubContents from "../../components/SubContents";

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

    return (
        <Wrapper>
            <InfoWrap>
                <DetailTitle title="선거세칙 개정안" activate="NOT_STARTED" />       
            </InfoWrap>
            <InfoWrap>
                <DetailSubTitle subtitle="투표 현황" />
                <SubContents>
                    asdasdasd
                </SubContents>
            </InfoWrap>
            <InfoWrap>
                <DetailSubTitle subtitle="의결식 (%)" />
                <SubContents>
                    <SubForm>
                        <InputBox width="79c%" placeholder=" %" />
                        <SubmitButton>적용</SubmitButton>
                    </SubForm>
                </SubContents>
            </InfoWrap>
        </Wrapper>
    )
}