import { styled } from "styled-components"
import { NAV_GRAY, AGREE_GREEN, DEFAULT_BLACK, DISAGREE_RED, ABSTENTION_YELLOW, ACTIVATE_GREEN, DEACTIVATE_RED, DEFAULT_WHITE } from "../../../../consts/ColorCodes"
import { useOutletContext, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"
import { QueryClientProvider, useQuery } from "react-query"

export default () => {

    let {setTitle, setLinkTo} = useOutletContext()
    let [votes, setVotes] = useState([]);
    let [agendaTitle, setAgendaTitle] = useState("");
    let {meetingId, agendaId} = useParams();

    useEffect(() => {
        setLinkTo("/overview/meeting/" + meetingId)
    }, [])

    const GetVotes = () => {
        const response = useQuery(['votes'], () => axios.get(BASE_URL + "/admin/agenda/overview/" + agendaId + "/vote"));
        
        if (response.data) {
            console.log(response.data.data.data)
            const qvotes = response.data.data.data.memberVote
            const qtitle = response.data.data.data.agendaTitle
            const qcounts = response.data.data.data.counts
            return (
                <>
                <Top>
                    <Title>{qtitle}</Title>
                    <Preview>
                        <PrevElement color={AGREE_GREEN}>찬성 | {qcounts.AGREE}</PrevElement>
                        <PrevElement color={DISAGREE_RED}>반대 | {qcounts.DISAGREE}</PrevElement>
                        <PrevElement color="#FFFF00">기권 | {qcounts.ABSTENTION}</PrevElement>
                    </Preview>
                </Top>
                <Body>
                    {
                        qvotes.map((vote) => {
                            return (
                                voteValue(vote)
                            )
                        })
                    }
                </Body>
                </>
            )
        }
    }


    return (
        <Wrapper>
            
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
    /* background-color: ${DEFAULT_BLACK}; */
`

const Top = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    justify-content: space-between;
`

const Title = styled.div`
    width: 49%;
    height: 60px;
    box-shadow: 2px 4px 12px rgba(1,1,1,0.1);
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: ${DEFAULT_BLACK};
    border-radius: 3px;
`

const Preview = styled.div`
    width: 49%;
    height: 60px;
    /* box-shadow: 2px 4px 12px rgba(1,1,1,0.1); */
    /* background-color: #123123; */
    display: flex;
    justify-content: space-between;
`

const PrevElement = styled.div`
    width: 31%;
    height: 100%;
    border: 2px solid ${(props) => props.color};
    /* box-shadow: 2px 4px 12px rgba(1,1,1,0.1); */
    border-radius: 4px;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    color: ${DEFAULT_BLACK};
`

const Body=styled.div`
    width: 95%;
    /* height: 100%; */
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;

    /* background-color: #123123; */
`

const VoteElement = styled.div`
    /* display: block; */
    display: flex;
    align-items: center;
    /* color: ${(props) => props.color}; */
    color: ${DEFAULT_BLACK};
    /* color: ${DEFAULT_WHITE}; */
    font-size: 18px;
    margin: 5px;
    margin-right: 13px;
    width: 70px;
    height: 30px;
`

const ValueCircle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin-right: 8px; 
    background: ${(props) => props.color};
    border: 1px solid ${(props) => props.borderColor};
`

const voteValue = function(vote) {
    let color
    let borderColor
    if (vote.value === "AGREE") {
        // color = AGREE_GREEN
        color = ACTIVATE_GREEN
        borderColor = ACTIVATE_GREEN
    } else if (vote.value === "DISAGREE") {
        color = DEACTIVATE_RED
        borderColor = DEACTIVATE_RED
    } else if (vote.value === "ABSTENTION") {
        color = "#FFFF00"
        borderColor = "#FFFF00"
    } else {
        color = DEFAULT_WHITE
        borderColor = DEFAULT_WHITE
        // color = "#000000"
        // borderColor = "#000000"
    }
    return (
        <VoteElement>
            <ValueCircle color={color} borderColor={borderColor}></ValueCircle>   
            {vote.name}
        </VoteElement>
    )
}