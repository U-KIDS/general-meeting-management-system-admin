import styled from "styled-components";
import { DEFAULT_WHITE, DEFAULT_BLACK, BACKGROUND_GRAY, LIGHT_NAVY } from "../../../../consts/ColorCodes";
import DetailSubTitle from "../../components/DetailSubTitle";
import InputBox from "../../components/InputBox";
import SubContents from "../../components/SubContents";

export default function AgendaCreate() {

    const Form = styled.form`
        margin: 30px;
        background-color: ${DEFAULT_WHITE};
        padding: 30px;
        border-radius: 10px;
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
        height: 40px;
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
            <DetailSubTitle subtitle="안건 생성" /> 
            <SubContents>
                <InputElement>
                    <InputNav>안건 제목</InputNav>
                    <InputBox type="text" width="84%" />
                </InputElement>
                <SubmitButton>생성</SubmitButton>
            </SubContents>
        </Form>
    )
}