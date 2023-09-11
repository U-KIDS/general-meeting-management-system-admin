import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import styled from "styled-components"
import { BACKGROUND_GRAY, DEFAULT_BLACK, NAV_GRAY } from "../../../../consts/ColorCodes"

export default (props) => {

    let {setTitle, setLinkTo} = useOutletContext()

    useEffect(() => {
        setLinkTo("/user")
    })
    
    return (
        <Wrapper>
            <MeetingCard>
                <Title>
                    제 100대 대의원 정기총회
                </Title>
                <Border></Border>
                <Date>
                    2023.09.18
                </Date>
            </MeetingCard>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MeetingCard = styled.div`
    width: 600px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${NAV_GRAY};
`

const Title  = styled.p`
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 24px;
    color: ${DEFAULT_BLACK}
    /* background-color: #321321; */
`

const Border = styled.div`
    width: 200px;
    height: 0px;
    border-bottom: 1px solid ${BACKGROUND_GRAY};

`

const Date = styled.p`
    width: 100%;
    color: ${DEFAULT_BLACK};
    text-align: center;
    margin-top: 20px;
    /* background-color: #123123; */
`