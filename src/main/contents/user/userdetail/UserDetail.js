import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"
import { BACKGROUND_GRAY, DEFAULT_BLACK, DEFAULT_WHITE, LIGHT_NAVY, NAV_GRAY } from "../../../../consts/ColorCodes"
import DetailTitle from "../../components/DetailTitle"

export default function UserDetail() {

    var navigate = useNavigate()
    var {studentNumber} = useParams()
    var [member, setMember] = useState([])
    var [button, setButton] = useState({
        text: "",
        url: ""
    })

    const getUserDetail = function() {
        axios.get(BASE_URL + "/admin/member/" + studentNumber, CONFIG)
            .then((response) => {
                console.log(response)
                setMember(response.data.data)

                if(response.data.data.activate === true) {
                    setButton({
                        text : "비활성화",
                        url : "/admin/member/" + response.data.data.studentNumber + "/block"
                    })
                } else if (response.data.data.activate === false) {
                    setButton({
                        text : "활성화",
                        url : "/admin/member/" + response.data.data.studentNumber + "/permit"
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getUserDetail()
    }, [])
    
    const Wrapper = styled.div`
        margin: 30px;
        background-color: ${DEFAULT_WHITE};
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: row;
    `

    const Image = styled.img`
        width: 300px;
        height: 400px;
        margin-right: 30px;
        background-size: cover;
    `

    const StudentInfo = styled.div`
        flex: 100%;
        height: 400px;
    `

    const InfoElement = styled.p`
        color: ${DEFAULT_BLACK};
        font-size: 18px;
        margin-bottom: 14px;
    `

    const Button = styled.button`
        width: 200px;
        height: 35px;
        border-radius: 10px;
        color: ${DEFAULT_WHITE};
        background-color: ${LIGHT_NAVY};
        /* margin-top: 111px; */
        margin-top: 20px;
        transition: .2s;

        &:hover {
            border: 2px solid ${LIGHT_NAVY};
            background-color: ${DEFAULT_WHITE};
            color: ${LIGHT_NAVY};
        }
    `

    const handleClick = function(e) {
        e.preventDefault()
        let confirmMessage = `${member.name}님의 상태를 "${button.text}"로 변경하시겠습니까?`

        if(window.confirm(confirmMessage) === true) {
            var url = e.target.value
            axios.patch(BASE_URL + url, CONFIG)
                .then(() => {
                    getUserDetail()
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    const deleteHandler = function() {
        axios.delete(BASE_URL + `/admin/member/${studentNumber}`, CONFIG)
            .then(() => {
                navigate("/user")
            })
    }

    const getImageUrl = (imageUrl) => {
        if(imageUrl === null || imageUrl === "") {
            return "https://i.pinimg.com/564x/e2/21/f0/e221f0954109ff15ad17ad7d05a1859b.jpg"
        } else {
            return imageUrl
        }
    }
    
    return (
        <Wrapper>
            <Image src={getImageUrl(member.imageUrl)}></Image>
            <StudentInfo>
                <DetailTitle title={member.name} updateLink={`/user/${member.studentNumber}/update`} activate={member.activate} deleteHandler={deleteHandler}></DetailTitle>
                <InfoElement>단과대학 : {member.college}</InfoElement>
                <InfoElement>학과 : {member.major}</InfoElement>
                <InfoElement>학년 : {member.grade}학년</InfoElement>
                <InfoElement>학번 : {member.studentNumber}</InfoElement>
                <Button onClick={handleClick} value={button.url}>{button.text}</Button>
            </StudentInfo>
        </Wrapper>
    )
}