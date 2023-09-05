import styled from "styled-components"
import UserListComponent from "./UserListComponent"
import UserListNav from "./UserListNav"
import UserFilter from "./UserFilter"
import Pagination from "../../components/Pagination"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"

export default function UserList() {

    var [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL + "/admin/member", CONFIG)
            .then((response) => {
                console.log(response)
                setMembers(response.data.data.data)
            })
    }, [])

    const Wrapper = styled.div`
        margin: 30px;
    `

    return (
        <Wrapper>
            <UserFilter setMembers={setMembers} />
            <UserListNav />
            {
                members.map((member) => {
                    return <UserListComponent to={`/user/${member.studentNumber}`} name={member.name} activate={member.activate} studentNumber={member.studentNumber} grade={member.grade} college={member.college} major={member.major} />
                })
            }
        </Wrapper>
    )
}