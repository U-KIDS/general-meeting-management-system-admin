import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../../../consts/BaseUrl"
import { ENGINEERING_COLLEGE, ENTIRE, GLOBAL_MANAGEMENT_COLLEGE, HUMANITIES_AND_SOCIAL_SCIENCE_COLLEGE, MEDICAL_SCIENCE_COLLEGE, NATURAL_SCIENCE_COLLEGE, PHYSICAL_EDUCATION_COLLEGE, SCH_MEDIA_LABS_COLLEGE, SW_CONVERGENCE_COLLEGE } from "../../../../consts/CollegeMajor"
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

export default function UserFilter() {

    const [values, setValues] = useState({
        name: "",
    })

    function collegeMajorChange(e) {

        var target = document.getElementById("major")
        var college
        if(e.target.value === "공과대학") college = ENGINEERING_COLLEGE
        else if(e.target.value === "글로벌경영대학") college = GLOBAL_MANAGEMENT_COLLEGE
        else if(e.target.value === "의과대학") college = MEDICAL_SCIENCE_COLLEGE
        else if(e.target.value === "의료과학대학") college = MEDICAL_SCIENCE_COLLEGE
        else if(e.target.value === "인문사화과학대학") college = HUMANITIES_AND_SOCIAL_SCIENCE_COLLEGE
        else if(e.target.value === "자연과학대학") college = NATURAL_SCIENCE_COLLEGE
        else if(e.target.value === "체육대학") college = PHYSICAL_EDUCATION_COLLEGE
        else if(e.target.value === "SCH미디어랩스") college = SCH_MEDIA_LABS_COLLEGE
        else if(e.target.value === "SW융합대학") college = SW_CONVERGENCE_COLLEGE
        else if(e.target.value === "전체") college = ENTIRE

        for (var major in college) {
            console.log(major)
            var opt = document.createElement("option")
            console.log(opt)
            opt.value = college[major]
            opt.innerHTML = college[major]
            target.appendChild(opt)
        }
    }

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
                <SelectInput name="college" onChange={collegeMajorChange}>
                    <option value="전체">전체</option>
                    <option value="공과대학">공과대학</option>
                    <option value="글로벌경영대학">글로벌경영대학</option>
                    <option value="의과대학">의과대학</option>
                    <option value="의료과학대학">의료과학대학</option>
                    <option value="인문사화과학대학">인문사화과학대학</option>
                    <option value="자연과학대학">자연과학대학</option>
                    <option value="체육대학">체육대학</option>
                    <option value="SCH미디어랩스">SCH미디어랩스</option>
                    <option value="SW융합대학">SW융합대학</option>
                </SelectInput>
                <SelectInput id="major" name="major">
                    <option value="전체">전체</option>
                </SelectInput>
                <TextInput 
                    type="text" 
                    placeholder="이름"
                    name="name" 
                    value={values.name}
                    onChange={handleChange}>
                    </TextInput>
            </div>
            <SubmitButton value="검색" type="submit"></SubmitButton>
        </FilterForm>
    )
}