import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"
import { BACKGROUND_GRAY, DEFAULT_BLACK, NAV_GRAY } from "../../../../consts/ColorCodes"

export default () => {

    let {setTitle, setLinkTo} = useOutletContext()
    let [meetings, setMeetings] = useState([]);

    useEffect(() => {
        setLinkTo("/user")

        axios.get(BASE_URL + "/admin/meeting/overview", CONFIG)
        .then((response) => {
            console.log(response)
            setMeetings(response.data.data.data)
        })
    })
    
    return (
        <Wrapper>
            {
                meetings.map((meeting) => {
                    return (
                    <MeetingCard to={`/overview/meeting/${meeting.id}`}>
                        <Title>
                            {meeting.name}
                        </Title>
                        <Border></Border>
                        <Detail>
                            <Description>
                                <ContentTitle>일시</ContentTitle>
                                <Contents>{meeting.meetingDate}</Contents>
                                <ContentTitle>주관</ContentTitle>
                                <Contents>{meeting.sponsor}</Contents>
                            </Description>
                            <QRCode src="https://qrcodethumb-phinf.pstatic.net/20230911_108/1694440930035rkB0W_PNG/1daFJ.png"></QRCode>
                        </Detail>
                    </MeetingCard>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MeetingCard = styled(Link)`
    width: 700px;
    height: 450px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 4px 16px rgba(1,1,1,0.1);
    margin-bottom: 80px;
    text-decoration: none;
    transition: .3s;

    &:hover {
        transform: translateY(-1%);
    }
`

const Title  = styled.p`
    width: 100%;
    height: 200px;
    font-size: 30px;
    color: ${NAV_GRAY};
    padding: 130px 40px 0px 40px;
    box-sizing: border-box;
    font-weight: 700;
    /* background-color: #321321; */
`

const Border = styled.div`
    height: 0px;
    width: 620px;
    border-bottom: 1px solid ${BACKGROUND_GRAY};
`

const Detail = styled.p`
    width: 100%;
    height: 250px;
    color: ${DEFAULT_BLACK};
    padding: 40px;
    box-sizing: border-box;
    display: flex;
`

const Description = styled.div`
    width: 450px;
    padding-top: 15px;
    /* background-color: #123123; */
`

const QRCode = styled.img`
    width: 170px;
    height: 170px;
`

const ContentTitle = styled.p`
    color: ${DEFAULT_BLACK};
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 7px;
`

const Contents = styled.p`
    color: ${DEFAULT_BLACK};
    font-size: 16px;
    margin-bottom: 30px;
`