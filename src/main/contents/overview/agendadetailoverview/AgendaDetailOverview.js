import { styled } from "styled-components"
import { NAV_GRAY, AGREE_GREEN, DEFAULT_BLACK, DISAGREE_RED, ABSTENTION_YELLOW } from "../../../../consts/ColorCodes"
import { useOutletContext, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"
import { QueryClientProvider, useQuery } from "react-query"

export default () => {

    let {setTitle, setLinkTo} = useOutletContext()
    let [votes, setVotes] = useState([]);
    let {meetingId, agendaId} = useParams();

    useEffect(() => {
        setLinkTo("/overview/meeting/" + meetingId)

        axios.get(BASE_URL + "/admin/agenda/overview/" + agendaId + "/vote", CONFIG)
        .then((response) => {
            console.log(response.data.data.memberVote)
            setVotes(response.data.data.memberVote)
        })
    }, [])

    const GetVotes = () => {
        const response = useQuery(['votes'], () => axios.get(BASE_URL + "/admin/agenda/overview/" + agendaId + "/vote"));
        
        if (response.data) {
            // setVotes(response.data.data.data.memberVote)
            const qvotes = response.data.data.data.memberVote
            return (
                <Body>
                    {
                        qvotes.map((vote) => {
                            return (
                                voteValue(vote)
                            )
                        })
                    }
                </Body>
            )
        }
    }


    return (
        <Wrapper>
            <Title>선거 세칙 개정안</Title>
            {GetVotes()}
        </Wrapper>
    )

}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    width: 800px;
    height: 60px;
    box-shadow: 2px 4px 12px rgba(1,1,1,0.1);
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: ${DEFAULT_BLACK};
`

const Body=styled.div`
    width: 95%;
    height: 100%;
    margin-top: 30px;
    display: flex;
`

const VoteElement = styled.div`
    color: ${(props) => props.color};
    font-size: 16px;
    margin: 5px;
`

const voteValue = function(vote) {
    let color
    if (vote.value === "AGREE") {
        color = AGREE_GREEN
    } else if (vote.value === "DISAGREE") {
        color = DISAGREE_RED
    } else if (vote.value === "ABSTENTION") {
        color = ABSTENTION_YELLOW
    } else {
        color = NAV_GRAY
    }
    return (
        <VoteElement color={color}>{vote.name}</VoteElement>
    )
}