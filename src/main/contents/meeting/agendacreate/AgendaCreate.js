import { useState } from "react";
import styled from "styled-components";
import { DEFAULT_WHITE, DEFAULT_BLACK, BACKGROUND_GRAY, LIGHT_NAVY } from "../../../../consts/ColorCodes";
import DetailSubTitle from "../../components/DetailSubTitle";
import InputBox from "../../components/InputBox";
import SubContents from "../../components/SubContents";
import axios from "axios";
import { BASE_URL } from "../../../../consts/BaseUrl";
import { useParams, useNavigate } from "react-router-dom";

const Input = styled.input`
    width: 84%;
    height: 35px;
    border-radius: 5px;
    padding: 0px 15px;
    box-sizing: border-box;
    outline: none;
    color: ${DEFAULT_BLACK};
`

const ImageInput = styled.input`
    width: 84%;
    height: 35px;
    line-height: 35px;
    padding: 0px 0px;
`

const Form = styled.form`
        margin: 30px;
        background-color: ${DEFAULT_WHITE};
        padding: 30px;
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

export default function AgendaCreate() {

    const {meetingId} = useParams()
    const navigate = useNavigate()
    const [values, setValues] = useState({
        title: "",
        agendaNumber: "",
        agendaCreateBy: "",
    })
    const [selectedImages, setSelectedImages] = useState([])

    const handleChange = function(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const onSelectImages = (e) => {
        e.preventDefault()
        e.persist()

        setSelectedImages(e.target.files)
    }

    const handleSubmit = function(e) {
        e.preventDefault();

        const formData = new FormData()

        const inputJson = JSON.stringify(values)
        const blob = new Blob([inputJson], {type: "application/json"})

        formData.append('agendaInfoDto', blob)
        for(let i=0; i< selectedImages.length; i++) {
            console.log(selectedImages[i])
            formData.append('images', selectedImages[i])
        }


        axios.post(BASE_URL + "/admin/agenda/meeting/" + meetingId , formData, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response)
                navigate("/meeting/" + meetingId)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <DetailSubTitle subtitle="안건 생성" /> 
            <SubContents>
                <InputElement>
                    <InputNav>의안 명</InputNav>
                    <Input 
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange} required/>
                </InputElement>
                <InputElement>
                    <InputNav>의안 번호</InputNav>
                    <Input 
                        type="text"
                        name="agendaNumber"
                        value={values.agendaNumber}
                        onChange={handleChange} required/>
                </InputElement>
                <InputElement>
                    <InputNav>입안처</InputNav>
                    <Input 
                        type="text"
                        name="agendaCreateBy"
                        value={values.agendaCreateBy}
                        onChange={handleChange} required/>
                </InputElement>
                <InputElement>
                    <InputNav>설명</InputNav>
                    <ImageInput 
                        type="file" 
                        accept="image/*"
                        value={values.images}
                        onChange={onSelectImages} 
                        multiple={true}/>
                </InputElement>
                <SubmitButton>생성</SubmitButton>
            </SubContents>
        </Form>
    )
}