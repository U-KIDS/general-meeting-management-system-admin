import { styled } from "styled-components"
import { NAV_GRAY } from "../../../../consts/ColorCodes"
import MeetingListComponent from "./MeeetingListComponent"
import MeetingListNav from "./MeetingListNav"
import { Link } from "react-router-dom"
import ListCreateLink from "../../components/ListCreateLink"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"

export default function MeetingList() {

    var [meetings, setMeetings] = useState([])

    useEffect(() => {
        axios.get(BASE_URL + "/admin/meeting", CONFIG)
            .then((response) => {
                console.log(response)
                setMeetings(response.data.data.data)
            })
            .catch((error => {
                console.log(error)
            }))
    }, [])
    
    const Wrapper = styled.div`
        margin:30px;
    `
    
    return (
        <Wrapper>
            <MeetingListNav></MeetingListNav>
            {
                meetings.map((meeting) => {
                    return <MeetingListComponent to={`/meeting/${meeting.id}`} name={meeting.name} state={meeting.activate} sponsor={meeting.sponsor} meetingDate={meeting.meetingDate} />
                })
            }
            <ListCreateLink to="/meeting/create" />
        </ Wrapper>
    )
}