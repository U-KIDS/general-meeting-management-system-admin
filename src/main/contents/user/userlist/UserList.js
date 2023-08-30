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
                setMembers(response)
            })
    }, [])

    const Wrapper = styled.div`
        margin: 30px;
    `

    return (
        <Wrapper>
            <UserFilter />
            <UserListNav />
            <UserListComponent to="/user/20194059" name="김태완" activate="true" studentNumber="20194059" grade="3" college="SW융합대학" major="컴퓨터소프트웨어공학과" />
            <Pagination />
        </Wrapper>
    )
}