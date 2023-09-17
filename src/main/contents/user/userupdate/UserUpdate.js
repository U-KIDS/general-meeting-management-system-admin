import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL } from "../../../../consts/BaseUrl"
import { DEFAULT_WHITE, LIGHT_NAVY, DEFAULT_BLACK, BACKGROUND_GRAY } from "../../../../consts/ColorCodes"
import DetailSubTitle from "../../components/DetailSubTitle"
import InputBox from "../../components/InputBox"
import SubContents from "../../components/SubContents"
import { useState } from "react"

const Form = styled.form`
    margin: 30px;
    padding: 30px;
    background-color: ${DEFAULT_WHITE};
    border-radius: 10px;
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

export default function UserUpdate() {

    const {studentNumber} = useParams()
    const navigate = useNavigate()
    let [values, setValues] = useState({
        name: "",
        studentNumber: "",
        grade: 1,
        college: "",
        major: "",
    })

    const handleChange = function(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = function(e) {
        e.preventDefault();

        let body= {
            name: values.name,
            studentNumber: values.studentNumber,
            grade: values.grade,
            college: values.college,
            major: values.major,
        }

        axios.patch(BASE_URL + "/admin/member/" + studentNumber, body)
        .then((response) => {
            console.log(response)
            navigate("/user/" + studentNumber)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() =>{
        axios.get(BASE_URL + "/admin/member/" + studentNumber)
        .then((response) => {
            setValues(response.data.data)
        }) 
    }, [])

    return (
        <Form onSubmit={handleSubmit}>
            <DetailSubTitle subtitle = "회원정보 수정" />
            <SubContents>
                <InputElement>
                    <InputNav>이름</InputNav>
                    <InputBox name="name" onChange={handleChange} value={values.name} type="text" width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>학번</InputNav>
                    <InputBox name="studentNumber" onChange={handleChange} value={values.studentNumber} type="text" width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>학년</InputNav>
                    <InputBox name="grade" onChange={handleChange} value={values.grade} type="number" width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>단과대학</InputNav>
                    <InputBox name="college" onChange={handleChange} value={values.college} type="text" width="84%" />
                </InputElement>
                <InputElement>
                    <InputNav>학과</InputNav>
                    <InputBox name="major" onChange={handleChange} value={values.major} type="text" width="84%" />
                </InputElement>
                <SubmitButton>수정</SubmitButton>
            </SubContents>
        </Form>
    )
}