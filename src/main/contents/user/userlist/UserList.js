import styled, { css } from "styled-components"
import { ENGINEERING_COLLEGE, ENTIRE, GLOBAL_MANAGEMENT_COLLEGE, HUMANITIES_AND_SOCIAL_SCIENCE_COLLEGE, MEDICAL_SCIENCE_COLLEGE, NATURAL_SCIENCE_COLLEGE, PHYSICAL_EDUCATION_COLLEGE, SCH_MEDIA_LABS_COLLEGE, SW_CONVERGENCE_COLLEGE } from "../../../../consts/CollegeMajor"
import { NAV_GRAY } from "../../../../consts/ColorCodes"
import UserListComponent from "./UserListComponent"

export default function UserList() {

    const Wrapper = styled.div`
        margin: 30px;
    `

    const FilterForm = styled.form`
        height: 50px;
        margin-bottom: 20px;

        background-color: white;
    `

    const UserElementNav = styled.div`
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    `

    const SizeStyle = css`
    ${(props) =>
        css`
            width: ${props.size};
        `
    }
    `

    const NavElement = styled.p`
        color: ${NAV_GRAY};
        text-align: center;
        margin: 0px 30px 0px 30px;
        font-weight: 600;
        font-size: 14px;

        ${SizeStyle}
    `

    const SelectInput = styled.select`
    
    `

    function collegeMajorChange(e) {

        var target = document.getElementById("major")
        if(e.target.value === "공과대학") var college = ENGINEERING_COLLEGE
        else if(e.target.value === "글로벌경영대학") var college = GLOBAL_MANAGEMENT_COLLEGE
        else if(e.target.value === "의과대학") var college = MEDICAL_SCIENCE_COLLEGE
        else if(e.target.value === "의료과학대학") var college = MEDICAL_SCIENCE_COLLEGE
        else if(e.target.value === "인문사화과학대학") var college = HUMANITIES_AND_SOCIAL_SCIENCE_COLLEGE
        else if(e.target.value === "자연과학대학") var college = NATURAL_SCIENCE_COLLEGE
        else if(e.target.value === "체육대학") var college = PHYSICAL_EDUCATION_COLLEGE
        else if(e.target.value === "SCH미디어랩스") var college = SCH_MEDIA_LABS_COLLEGE
        else if(e.target.value === "SW융합대학") var college = SW_CONVERGENCE_COLLEGE
        else if(e.target.value === "전체") var college = ENTIRE

        for (var major in college) {
            console.log(major)
            var opt = document.createElement("option")
            console.log(opt)
            opt.value = college[major]
            opt.innerHTML = college[major]
            target.appendChild(opt)
        }
    }

    return (
        <Wrapper>
            <FilterForm>
                <SelectInput id="college" name="단과대학" onChange={collegeMajorChange}>
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
                <SelectInput id="major" name="단과대학"></SelectInput>
            </FilterForm>
            <UserElementNav>
                <NavElement size="100px">이름</NavElement>
                <NavElement size="100px">상태</NavElement>
                <NavElement size="120px">학번</NavElement>
                <NavElement size="80px">학년</NavElement>
                <NavElement size="150px">단과대학</NavElement>
                <NavElement size="200px">학과</NavElement>
            </UserElementNav>
            <UserListComponent name="김태완" activate="true" studentNumber="20194059" grade="3" college="SW융합대학" major="컴퓨터소프트웨어공학과" to="/" />
            <UserListComponent name="김태완" activate="true" studentNumber="20194059" grade="3" college="SW융합대학" major="컴퓨터소프트웨어공학과" to="/" />
            <UserListComponent name="김태완" activate="false" studentNumber="20194059" grade="3" college="SW융합대학" major="컴퓨터소프트웨어공학과" to="/" />
            <UserListComponent name="김태완" activate="true" studentNumber="20194059" grade="3" college="SW융합대학" major="컴퓨터소프트웨어공학과" to="/" />
            <UserListComponent name="김태완" activate="false" studentNumber="20194059" grade="3" college="SW융합대학" major="컴퓨터소프트웨어공학과" to="/" />
        </Wrapper>
    )
}