import { styled } from "styled-components"
import css from "styled-components"
import { BACKGROUND_GRAY, DISAGREE_RED, LIGHT_NAVY, NAV_GRAY, PARAN_NAVY } from "../consts/ColorCodes"
import paran_logo from "../images/paran_logo.png"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../consts/BaseUrl"
import { useNavigate } from "react-router-dom"

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${PARAN_NAVY};
`

const LogoSection = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #363C47;
    margin-right: 30px;

    /* background-color: #123123; */
`

const LogoImage = styled.img`
    width: 220px;
    height: 220px;
    margin-bottom: 10px;
`

const TitleText = styled.p`
    color: ${NAV_GRAY};
    font-size: 26px;
    margin-top: 30px;
    font-weight: 500;
`

const LoginBox = styled.form`
    width: 520px;
    height: 500px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextField = styled.div`
    width: 400px;
    position: relative;
    border-bottom: 1px solid #363C47;
    margin: 15px 0px;

    & input:focus ~ label,
    & input:valid ~ label {
        top: -5px;
        color: ${(props) => props.color};
        font-size: 12px;
    }

    & input:focus ~ span::before,
    & input:valid ~ span::before {
        width: 100%;
    }
`

const TextSpan = styled.span`
    &::before{
        content: '';
        position: absolute;
        top: 40px;
        left: 0px;
        width: 0px;
        height: 2px;
        background-color: ${(props) => props.color};
        transition: .5s ease;
    }
`

const LoginInput = styled.input`

    width: 390px;
    height: 40px;
    margin: 0px 5px;
    background-color: ${PARAN_NAVY};
    color: ${NAV_GRAY};
    outline: none;

`

const LoginLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 5px;
    color: ${NAV_GRAY};
    font-size: 14px;
    font-weight: 500;
    transform: translateY(-50%);
    pointer-events: none;
    transition: .5s ease;
`

const SubmitButton = styled.button`
    width: 400px;
    height: 50px;
    border: 1px solid #363C47;
    background-color: ${PARAN_NAVY};
    border: 1px solid ${LIGHT_NAVY};
    border-radius: 7px;
    margin-top: 40px;
    color: ${LIGHT_NAVY};
    font-size: 18px;
    transition: .2s;

    &:hover {
        background-color: ${LIGHT_NAVY};
        color: ${BACKGROUND_GRAY};
    }
`

const ErrorText = styled.p `
    width: 400px;
    height: 12px;
    color: ${NAV_GRAY};
    font-size: 12px;
    margin-top: 10px;
    margin-left: 5px;
`

export default function Login() {

    sessionStorage.clear()
    
    var navigate = useNavigate();

    const [values, setValues] = useState({
        studentNumber : "",
        password : ""
    })

    const [color, setColor] = useState(LIGHT_NAVY)
    const [errorText, setErrorText] = useState("")

    const handleChange = function(e) {
        setColor(LIGHT_NAVY)
        setErrorText("")
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = function(e) {
        e.preventDefault();

        var body = {
            studentNumber : values.studentNumber,
            password : values.password
        }

        axios.post(BASE_URL + "/auth/login", body)
            .then((response) => {
                if (response.data.status === 200) {
                    var token = response.data.data.token
                    window.sessionStorage.setItem("token", token);
                    navigate("/user")
                } else {
                    setColor(DISAGREE_RED)
                    setErrorText("* 아이디 혹은 비밀번호를 확인하세요")
                }
            })
            .catch((error) => {
                setColor(DISAGREE_RED)
                setErrorText("* 아이디 혹은 비밀번호를 확인하세요")
            })
    }

    return (
        <Wrapper>
            <LogoSection>
                <LogoImage alt="총대의원회 파란 로고" src={paran_logo}></LogoImage>
                <TitleText>ADMIN</TitleText>
            </LogoSection>
            <LoginBox onSubmit={handleSubmit}>
                <TextField color={color}>
                    <LoginInput 
                        name="studentNumber"
                        value={values.studentNumber}
                        onChange={handleChange} 
                        required></LoginInput>
                    <TextSpan color={color}></TextSpan>
                    <LoginLabel>Username</LoginLabel>
                </TextField>
                <TextField color={color}>
                    <LoginInput 
                        type="password" 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required></LoginInput>
                    <TextSpan color={color}></TextSpan>
                    <LoginLabel>Password</LoginLabel>
                </TextField>
                <ErrorText>{errorText}</ErrorText>
                <SubmitButton>CONNECT</SubmitButton>
            </LoginBox>
        </Wrapper>
    )
}