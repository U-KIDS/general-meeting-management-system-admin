import styled from "styled-components"
import { DEFAULT_WHITE, LIGHT_NAVY, DEFAULT_BLACK, BACKGROUND_GRAY } from "../../../../consts/ColorCodes"
import DetailSubTitle from "../../components/DetailSubTitle"
import InputBox from "../../components/InputBox"
import SubContents from "../../components/SubContents"

export default function UserUpdate() {

    const Form = styled.form`
        margin: 30px;
        padding: 30px;
        background-color: ${DEFAULT_WHITE};
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
            <DetailSubTitle subtitle = "회원정보 수정" />
            <SubContents>
                <InputElement>
                    <InputNav>이름</InputNav>
                    <InputBox value="김멋사" type="text" width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>학번</InputNav>
                    <InputBox value="20194059" type="text" width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>학년</InputNav>
                    <InputBox value="3" type="number" width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>단과대학</InputNav>
                    <InputBox value="SW융합대학" type="text" width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>학과</InputNav>
                    <InputBox value="컴퓨터소프트웨어공학과" type="text" width="84%" />
                </InputElement>
                <SubmitButton>수정</SubmitButton>
            </SubContents>
        </Form>
    )
}