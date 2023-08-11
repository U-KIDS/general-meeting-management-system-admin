import { styled } from "styled-components"
import { NAV_GRAY } from "../../../../consts/ColorCodes"
import MeetingListComponent from "./MeeetingListComponent"
import MeetingListNav from "./MeetingListNav"
import { Link } from "react-router-dom"
import ListCreateLink from "../../components/ListCreateLink"

export default function MeetingList() {
    
    const Wrapper = styled.div`
        margin:30px;
    `
    
    return (
        <Wrapper>
            <MeetingListNav></MeetingListNav>
            <MeetingListComponent to="/meeting/1" name="제 98대 대의원 정기총회" state="COMPLETE" sponsor="39대 총대의원회 파란" meetingDate="2023.09.11" />
            <MeetingListComponent to="/meeting/2" name="제 99대 대의원 정기총회" state="IN_PROGRESS" sponsor="39대 총대의원회 파란" meetingDate="2023.09.11" />
            <MeetingListComponent to="/meeting/3" name="제 100대 대의원 정기총회" state="NOT_STARTED" sponsor="39대 총대의원회 파란" meetingDate="2023.09.11" />
            <ListCreateLink to="/meeting/create" />
        </ Wrapper>
    )
}