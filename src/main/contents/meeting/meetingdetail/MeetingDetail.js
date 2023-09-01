import { styled } from "styled-components"
import { DEFAULT_WHITE, DEFAULT_BLACK } from "../../../../consts/ColorCodes"
import DetailSubTitle from "../../components/DetailSubTitle"
import DetailTitle from "../../components/DetailTitle"
import ListCreateLink from "../../components/ListCreateLink"
import SubContents from "../../components/SubContents"
import AgendaListComponent from "./AgendaListComponent"
import AgendaListNav from "./AgendaLIstNav"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"
import { useNavigate, useParams } from "react-router-dom"


export default function MeetingDetail() {

    var [meeting, setMeeting] = useState([]);
    var [agendas, setAgendas] = useState([]);
    const { meetingId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL + `/admin/meeting/` + meetingId, CONFIG)
            .then((response) => {
                console.log(response.data.data)
                setMeeting(response.data.data)
                setAgendas(response.data.data.agendas)
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(BASE_URL + `/admin/meeting/` + meetingId, CONFIG)
            .then(() => {
                navigate("/meeting")
            })
    }
    
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
                <DetailTitle title={meeting.meetingName} activate={meeting.activate} deleteHandler={deleteHandler} updateLink={`/meeting/${meetingId}/update`} />
                <InfoElement>일시 : {meeting.meetingDate}</InfoElement>
                <InfoElement>주최 : {meeting.sponsor}</InfoElement>
            </Info>
            <Info>
                <DetailSubTitle subtitle="안건" />
                <SubContents>
                    <AgendaListNav />
                    {
                        agendas.map((agenda) => {
                            return <AgendaListComponent to={`/meeting/${meetingId}/${agenda.agendaId}`} name={agenda.title} state={agenda.agendaStatus} />
                        })
                    }
                    <ListCreateLink to={`/meeting/${meetingId}/agenda/create`} />
                </SubContents>
            </Info>
        </Wrapper>
    )
}