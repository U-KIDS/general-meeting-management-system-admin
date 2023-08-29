import styled from "styled-components"
import { BACKGROUND_GRAY, DEFAULT_BLACK, DEFAULT_WHITE, LIGHT_NAVY } from "../../../../consts/ColorCodes"
import DetailSubTitle from "../../components/DetailSubTitle"
import InputBox from "../../components/InputBox"
import SubContents from "../../components/SubContents"
import { BASE_URL } from "../../../../consts/BaseUrl"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = styled.form`
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

export default function MeetingCreate() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        date: "",
        sponsor: "제 39대 총대의원회 파란",
    })

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

        console.log(body.meetingDate)

        axios.post(BASE_URL + "/admin/meeting" , body)
            .then((response) => {
                console.log(response)
                navigate("/meeting/" + response.data.data.id)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <DetailSubTitle subtitle="정기총회 생성" />
            <SubContents>
                <InputElement>
                    <InputNav>총회 이름</InputNav>
                    <InputBox 
                        width="84%"
                        name="name"
                        value={values.name}
                        onChange={handleChange} />
                </InputElement>
                <InputElement>
                    <InputNav>총회 날짜</InputNav>
                    <InputBox 
                        width="84%"
                        type="date"
                        name="date"
                        value={values.date}
                        onChange={handleChange} />
                </InputElement>
                <InputElement>
                    <InputNav>주최</InputNav>
                    <InputBox 
                        value={values.sponsor} 
                        width="84%"
                        name="sponsor"/>
                </InputElement>
                <SubmitButton>
                    생성
                </SubmitButton>
            </SubContents>
        </Form>
    )
}