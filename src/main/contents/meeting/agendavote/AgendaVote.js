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

    // useEffect(() => {
    //     axios.get(BASE_URL + "/admin/agenda/" + agendaId + "/vote")
    //     .then((response) => {
    //         console.log(response)
    //         setVotes(response)
    //     })
    // }, [])

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
                <Title>선거세칙 개정안</Title>
                <Activate value={"IN_PROGRESS"} />
            </TitleWrap>
            <Contents>
                <DetailSubTitle subtitle="투표 현황" />
                <SubContents>
                    <VoteFilter />
                    <VoteListNav />
                    <VoteListComponent />
                    <VoteListComponent />
                    <VoteListComponent />
                    <VoteListComponent />
                    <VoteListComponent />
                    <VoteListComponent />
                    <VoteListComponent />
                </SubContents>
            </Contents>
        </Wrapper>
    )
}