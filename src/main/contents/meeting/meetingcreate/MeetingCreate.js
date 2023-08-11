import styled from "styled-components"
import { BACKGROUND_GRAY, DEFAULT_BLACK, DEFAULT_WHITE, LIGHT_NAVY } from "../../../../consts/ColorCodes"
import DetailSubTitle from "../../components/DetailSubTitle"
import InputBox from "../../components/InputBox"
import SubContents from "../../components/SubContents"

export default function MeetingCreate() {

    const Form = styled.div`
        margin: 30px;
        background-color: ${DEFAULT_WHITE};
        border-radius: 10px;
        padding: 30px;
    `

    const InputElement = styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    `

    const InputNav = styled.p`
        width: 15%;
        height: 35px;
        line-height: 30px;
        padding-left: 10px;
        font-size: 16px;
        font-weight: 600;
        color: ${DEFAULT_BLACK};
    `

    const SubmitButton = styled.button`
        background-color: ${LIGHT_NAVY};
        color: ${DEFAULT_WHITE};
        width: 100%;
        height: 35px;
        border-radius: 5px;
        margin-top: 20px;
        transition: .2s;
        font-weight: 500;
        font-size: 14px;

        &:hover{
            background-color: ${BACKGROUND_GRAY};
            color: ${LIGHT_NAVY};
            border: 2px solid ${LIGHT_NAVY};
        }
    `

    return (
        <Form>
            <DetailSubTitle subtitle="정기총회 생성" />
            <SubContents>
                <InputElement>
                    <InputNav>총회 이름</InputNav>
                    <InputBox width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>총회 날짜</InputNav>
                    <InputBox width="84%" type="date"/>
                </InputElement>
                <InputElement>
                    <InputNav>주최</InputNav>
                    <InputBox value="39대 총대의원회 파란" width="84%" />
                </InputElement>
                <SubmitButton>
                    생성
                </SubmitButton>
            </SubContents>
        </Form>
    )
}