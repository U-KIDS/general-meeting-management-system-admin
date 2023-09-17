import styled from "styled-components"
import { BACKGROUND_GRAY, DEFAULT_BLACK, DEFAULT_WHITE, LIGHT_NAVY } from "../../../../consts/ColorCodes"
import DetailSubTitle from "../../components/DetailSubTitle"
import SubContents from "../../components/SubContents"
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const MeetingForm = styled.form`
    margin: 30px;
    background-color: ${DEFAULT_WHITE};
    border-radius: 10px;
    padding: 30px;
`

const InputElement = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const InputNav = styled.p`
    width: 15%;
    height: 35px;
    line-height: 30px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 600;
    color: ${DEFAULT_BLACK};
`

const Input = styled.input`
    width: 84%;
    height: 35px;
    border-radius: 5px;
    padding: 0px 15px;
    box-sizing: border-box;
    outline: none;
    color: ${DEFAULT_BLACK};
`

const SubmitButton = styled.button`
    background-color: ${LIGHT_NAVY};
    color: ${DEFAULT_WHITE};
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin-top: 20px;
    transition: .2s;
    font-weight: 500;
    font-size: 14px;

    &:hover{
        background-color: ${BACKGROUND_GRAY};
        color: ${LIGHT_NAVY};
        border: 2px solid ${LIGHT_NAVY};
    }
`   

export default function MeetingUpdate() {

    const navigate = useNavigate();
    const {meetingId} = useParams();
    const [values, setValues] = useState({
        name: "",
        date: "",
        sponsor: "39대 총대의원회 파란",
    })

    useEffect(() => {
        axios.get(BASE_URL + "/admin/meeting/" + meetingId + "/update" ,CONFIG)
            .then((response) => {
                var meeting = response.data.data
                var date = meeting.meetingDate.split('T')[0]
                
                console.log(date)
                setValues({
                    name: meeting.name,
                    date: date,
                    sponsor: meeting.sponsor
                })
            })
    }, [])

    const handleChange = function(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = function(e) {
        e.preventDefault();

        let body = {
            name : values.name,
            meetingDate : values.date + "T00:00:00.00000",
            sponsor : values.sponsor
        }

        axios.patch(BASE_URL + "/admin/meeting/" + meetingId , body)
            .then((response) => {
                console.log(response)
                navigate("/meeting/" + meetingId)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <MeetingForm onSubmit={handleSubmit}>
            <DetailSubTitle subtitle="정기총회 수정" />
            <SubContents>
                <InputElement>
                    <InputNav>총회 이름</InputNav>
                    <Input 
                        width="84%"
                        name="name"
                        value={values.name}
                        onChange={handleChange} required></Input>
                </InputElement>
                <InputElement>
                    <InputNav>총회 날짜</InputNav>
                    <Input 
                        width="84%"
                        type="date"
                        name="date"
                        value={values.date}
                        onChange={handleChange} required></Input>
                </InputElement>
                <InputElement>
                    <InputNav>주최</InputNav>
                    <Input 
                        value={values.sponsor} 
                        width="84%"
                        name="sponsor"
                        onChange={handleChange} required></Input>
                </InputElement>
                <SubmitButton>
                    수정
                </SubmitButton>
            </SubContents>
        </MeetingForm>
    )
}