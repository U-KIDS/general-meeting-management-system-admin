import { styled } from "styled-components"
import { DEFAULT_WHITE, DEFAULT_BLACK } from "../../../../consts/ColorCodes"
import DetailSubTitle from "../../components/DetailSubTitle"
import DetailTitle from "../../components/DetailTitle"
import ListCreateLink from "../../components/ListCreateLink"
import SubContents from "../../components/SubContents"
import AgendaListComponent from "./AgendaListComponent"
import AgendaListNav from "./AgendaLIstNav"


export default function MeetingDetail() {
    
    const Wrapper = styled.div`
        margin: 30px;
    `

    const Info = styled.div`
        background-color: ${DEFAULT_WHITE};
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 30px;
    `

    const InfoElement = styled.p`
        color: ${DEFAULT_BLACK};
        font-size: 18px;
        margin-bottom: 14px;
    `

    return(
        <Wrapper>
            <Info>
                <DetailTitle title="제 98대 대의원 정기총회" activate="NOT_STARTED" />
                <InfoElement>일시 : 2023.09.11</InfoElement>
                <InfoElement>주최 : 39대 총대의원회 파란</InfoElement>
            </Info>
            <Info>
                <DetailSubTitle subtitle="안건" />
                <SubContents>
                    <AgendaListNav />
                    <AgendaListComponent to="/meeting/1/1" name="선거세칙 개정안" state="COMPLETE" />
                    <AgendaListComponent to="/meeting/1/2" name="학생회칙 개정안" state="IN_PROGRESS" />
                    <AgendaListComponent to="/meeting/1/3" name="조직세칙 개정안" state="NOT_STARTED" />
                    <ListCreateLink to="/meeting/3/agenda/create" />
                </SubContents>
            </Info>
        </Wrapper>
    )
}