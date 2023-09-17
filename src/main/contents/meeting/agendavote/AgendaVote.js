import styled from "styled-components"
import { DEFAULT_WHITE, DEFAULT_BLACK } from "../../../../consts/ColorCodes"
import Activate from "../../components/Activate"
import DetailSubTitle from "../../components/DetailSubTitle"
import SubContents from "../../components/SubContents"
import VoteFilter from "./VoteFilter"
import VoteListComponent from "./VoteListComponent"
import VoteListNav from "./VoteListNav"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../../../consts/BaseUrl"
import { useParams } from "react-router-dom"

export default function AgendaVote() {

    var [votes, setVotes] = useState([]);
    var {meetingId, agendaId} = useParams()
    var [infos, setInfos] = useState({
        agendaName : "",
        agendaStatus : ""
    })

    useEffect(() => {
        axios.get(BASE_URL + "/admin/agenda/" + agendaId + "/vote")
        .then((response) => {
            console.log(response)
            setVotes(response.data.data.votes)
            setInfos({
                agendaName: response.data.data.agendaName,
                agendaStatus: response.data.data.agendaStatus,
            })
        })
    }, [])

    const Wrapper = styled.div`
        margin: 30px;
    `

    const TitleWrap = styled.div`
        background-color: ${DEFAULT_WHITE};
        border-radius:  10px;
        padding : 30px;
        display: flex;
        align-items: center;
    `

    const Title = styled.p`
        font-size: 30px;
        font-weight: 700;
        color: ${DEFAULT_BLACK};
        margin-right: 30px;
    `
    
    const Contents = styled.div`
        background-color: ${DEFAULT_WHITE};
        padding: 30px;
        border-radius: 10px;
        margin-top: 30px;
    `

    return (
        <Wrapper>
            <TitleWrap>
                <Title>{infos.agendaName}</Title>
                <Activate value={infos.agendaStatus} />
            </TitleWrap>
            <Contents>
                <DetailSubTitle subtitle="투표 현황" />
                <SubContents>
                    <VoteFilter size={votes.length} />
                    <VoteListNav />
                    {
                        votes.map((vote) => {
                            return (
                                <VoteListComponent name={vote.name} voteValue = {vote.voteValue} studentNumber={vote.studentNumber} major ={vote.major} />
                            )
                        })
                    }
                </SubContents>
            </Contents>
        </Wrapper>
    )
}