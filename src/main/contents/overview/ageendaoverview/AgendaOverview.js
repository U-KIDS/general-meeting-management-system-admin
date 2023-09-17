import { useEffect } from "react"
import styled from "styled-components"
import { Link, useOutletContext, useParams } from "react-router-dom"
import { BACKGROUND_GRAY, DEFAULT_BLACK, NAV_GRAY } from "../../../../consts/ColorCodes"
import axios from "axios"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"
import { useState } from "react"

export default () => {

    let {setTitle, setLinkTo} = useOutletContext()
    let {meetingId} = useParams()
    let [agendas, setAgendas] = useState([])

    useEffect(() => {
        setLinkTo("/overview/meeting")

        axios.get(BASE_URL + "/admin/agenda/overview/" + meetingId, CONFIG)
        .then((response) => {
            setAgendas(response.data.data.data)
        })
    }, [])
    

    return (
        <Wrapper>
            <CardWrap>
                <CardNav>
                    <NavContent>의안 번호</NavContent>
                    <NavContent>의안 명</NavContent>
                    <NavContent>입안처</NavContent>
                </CardNav>
                {
                    agendas.map((agenda) => {
                        return (
                            <AgendaCard to={`/overview/meeting/${meetingId}/${agenda.agendaId}`}>
                                <CardContent>{agenda.agendaNumber}</CardContent>
                                <CardContent>{agenda.title}</CardContent>
                                <CardContent>{agenda.agendaCreateBy}</CardContent>
                            </AgendaCard>
                        )
                    })
                }
            </CardWrap>
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

const CardWrap = styled.div`
    width: 1000px;
    height: 600px;
    margin-bottom: 80px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CardNav = styled.div`
    width: 1000px;
    height: 30px;
    display: flex;
    padding: 30px 70px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    color: ${NAV_GRAY};
    border-bottom: 1px solid ${BACKGROUND_GRAY};
    margin-bottom: 30px;
`

const NavContent = styled.p`
    font-size: 14px;
    font-weight: 600;
    width: 250px;
    height: 30px;
    text-align: center;
`

const AgendaCard = styled(Link)`
    width: 1000px;
    height: 80px;
    margin: 10px 0px;
    border-radius: 7px;
    box-shadow: 2px 4px 12px rgba(1,1,1,0.1);
    padding: 0px 70px;
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    transition: .3s;

    &:hover {
        transform: translateY(-3%);
    }
`

const CardContent = styled.p`
    color: ${DEFAULT_BLACK};
    width: 250px;
    height: 30px;
    text-align: center;
    line-height: 30px;
`