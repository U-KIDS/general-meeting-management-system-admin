import { Link } from "react-router-dom"
import styled from "styled-components"
import { BACKGROUND_GRAY, DEFAULT_BLACK, DEFAULT_WHITE, LIGHT_NAVY, NAV_GRAY } from "../../../../consts/ColorCodes"
import DetailTitle from "../../components/DetailTitle"

export default function UserDetail() {
    
    const Wrapper = styled.div`
        margin: 30px;
        background-color: ${DEFAULT_WHITE};
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: row;
    `

    const Image = styled.img`
        width: 300px;
        height: 400px;
        margin-right: 30px;
        background-size: cover;
    `

    const StudentInfo = styled.div`
        flex: 100%;
        height: 400px;
    `

    const InfoElement = styled.p`
        color: ${DEFAULT_BLACK};
        font-size: 18px;
        margin-bottom: 14px;
    `

    const Button = styled.button`
        width: 200px;
        height: 35px;
        border-radius: 10px;
        color: ${DEFAULT_WHITE};
        background-color: ${LIGHT_NAVY};
        /* margin-top: 111px; */
        margin-top: 20px;
        transition: .2s;

        &:hover {
            border: 2px solid ${LIGHT_NAVY};
            background-color: ${DEFAULT_WHITE};
            color: ${LIGHT_NAVY};
        }
    `
    
    return (
        <Wrapper>
            <Image src="https://github.com/U-KIDS/general-meeting-management-system-admin/assets/64270501/d715d64a-872c-4e92-9285-a3f802036f82"></Image>
            <StudentInfo>
                <DetailTitle title="김멋사" updateLink="/user/20194059/update" activate="true"></DetailTitle>
                <InfoElement>단과대학 : SW융합대학</InfoElement>
                <InfoElement>학과 : 컴퓨터소프트웨어공학과</InfoElement>
                <InfoElement>학년 : 3학년</InfoElement>
                <InfoElement>학번 : 20194059</InfoElement>
                <Button>비활성화</Button>
            </StudentInfo>
        </Wrapper>
    )
}