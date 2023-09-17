import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../../../../consts/BaseUrl"
import { DEFAULT_BLACK, DEFAULT_WHITE, LIGHT_NAVY } from "../../../../consts/ColorCodes"

const FilterForm = styled.form`
        height: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
`

const SelectInput = styled.select`
        background-color: ${DEFAULT_WHITE};
        color:${DEFAULT_BLACK};
        margin-right: 20px;
        width: 120px;
        height: 30px;
        border-radius: 5px;
        padding-left: 7px;
        padding-right: 7px;
        outline: none;
`

const TextInput = styled.input`
    background-color: ${DEFAULT_WHITE};
    color:${DEFAULT_BLACK};
    margin-right: 20px;
    width: 230px;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
`

const SubmitButton = styled.input`
    background-color: ${LIGHT_NAVY};
    color:${DEFAULT_WHITE};
    width: 80px;
    height: 30px;
    border-radius: 5px;
`

export default function VoteFilter(props) {

    const [values, setValues] = useState({
        name: "",
    })

    const handleChange = function(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = function() {
        axios.get(BASE_URL, {
            params: {
                name: values.name 
            }
        }).then(function (response) {
            console.log(response)
        })
    }

    return (
        <FilterForm onSubmit={handleSubmit}>
            <div>
                <SelectInput id="value" name="value">
                    <option value="ALL">전체</option>
                    <option value="AGREE">찬성</option>
                    <option value="DISAGREE">반대</option>
                    <option value="ABSTENTION">기권</option>
                </SelectInput>
                <TextInput 
                    type="text" 
                    placeholder="이름" 
                    name="name" 
                    value={values.name}
                    onChange={handleChange}>
                </TextInput>
                {props.size} 개의 결과
            </div>
            <SubmitButton value="검색" type="submit"></SubmitButton>
        </FilterForm>
    )
}