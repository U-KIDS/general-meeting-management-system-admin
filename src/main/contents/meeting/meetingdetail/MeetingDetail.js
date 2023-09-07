import { styled } from "styled-components"
import { DEFAULT_WHITE, DEFAULT_BLACK, LIGHT_NAVY, BACKGROUND_GRAY } from "../../../../consts/ColorCodes"
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
    var [activate, setActivate] = useState(true);
    const { meetingId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL + `/admin/meeting/` + meetingId, CONFIG)
            .then((response) => {
                console.log(response.data.data)
                setMeeting(response.data.data)
                setAgendas(response.data.data.agendas)
                setActivate(response.data.data.activate)
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(BASE_URL + `/admin/meeting/${meetingId}`, CONFIG)
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

    const ActivateButton = styled.button `
        width: 100%;
        height: 60px;
        border-radius: 10px;
        background-color: ${LIGHT_NAVY};
        color: ${DEFAULT_WHITE};
        font-size: 16px;
        border: 2px solid ${LIGHT_NAVY};
        transition: .3s;

        &:hover {
            background-color: ${BACKGROUND_GRAY};
            color: ${LIGHT_NAVY};
        }
    `   

    const activateButtonHandler = (activate) => {
        let url
        if (activate === true) {
            url = BASE_URL + `/admin/meeting/${meetingId}/deactivate`
        } else {
            url = BASE_URL + `/admin/meeting/${meetingId}/activate`
        }

        axios.patch(url)
        .then(() => {
            navigate("/meeting/" + meetingId)
        })
    }

    const getActivateText = (activate) => {
        if (activate === true) {
            return "비활성화"
        } else {
            return "활성화"
        }

    }


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
            <Info>
                <DetailSubTitle subtitle="조작" />
                <SubContents>
                    <ActivateButton onClick={() => activateButtonHandler(meeting.activate)}>{getActivateText(meeting.activate)}</ActivateButton>
                </SubContents>
            </Info>
        </Wrapper>
    )
}