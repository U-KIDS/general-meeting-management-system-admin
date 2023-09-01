import styled, { css } from "styled-components";
import { DEFAULT_WHITE, LIGHT_NAVY, BACKGROUND_GRAY, DEFAULT_BLACK, NAV_GRAY } from "../../../../consts/ColorCodes";
import DetailSubTitle from "../../components/DetailSubTitle";
import DetailTitle from "../../components/DetailTitle";
import InputBox from "../../components/InputBox";
import SubContents from "../../components/SubContents";
import VotePreview from "./VotePreview";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, CONFIG } from "../../../../consts/BaseUrl";
import ImageSlider from "./ImageSlider";

export default function AgendaDetail() {

    var navigate = useNavigate()
    var [agenda, setAgenda] = useState([])
    var [voteData, setVoteData] = useState({
        agree : 0,
        disagee : 0,
        abstention : 0
    })
    var [imageUrls, setImageUrls] = useState("")
    var [maxSize, setMaxSize] = useState(0)
    var {meetingId, agendaId, imageIndex} = useParams()
    var indexValue = parseInt(imageIndex)

    useEffect(() => {
        axios.get(BASE_URL + "/admin/agenda/" + agendaId, CONFIG)
            .then((response) => {
                setAgenda(response.data.data)
                setVoteData(response.data.data.votePreviewDto)
                setImageUrls(response.data.data.imageUrls)

                if (imageIndex === undefined) {
                    if (response.data.data.imageUrls.length > 0) {
                        navigate(`/meeting/${meetingId}/${agendaId}/0`)
                    }
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const Wrapper = styled.div`
        margin: 30px;
    `

    const InfoWrap = styled.div`
        background-color: ${DEFAULT_WHITE};
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 30px;
    `

    const SubTitleWrap = styled.div`
        border-bottom: solid 1px ${BACKGROUND_GRAY};
        padding-bottom: 7px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    const SubTitle = styled.p`
        font-size: 22px;
        font-weight: 600;
        color: ${DEFAULT_BLACK};
        margin-right: 30px;
    `

    const DetailLink = styled(Link)`
        text-decoration: none;
        color: ${NAV_GRAY};
        font-size: 13px;
    `

    const SubForm = styled.form`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    `

    const SubmitButton = styled.button`
        width: 20%;
        height: 35px;
        background-color: ${LIGHT_NAVY};
        color: ${DEFAULT_WHITE};
        border-radius: 5px;
    `
    
    const deleteHandler = () => {
        axios.delete(BASE_URL + `/admin/agenda/` + agendaId, CONFIG)
            .then(() => {
                navigate("/meeting/" + meetingId)
            })
    }

    const init = function() {
        if(indexValue != undefined && indexValue >= 0 && imageUrls.length >= 0) {
            return (
                <InfoWrap>
                    <SubTitleWrap>
                        <SubTitle>설명</SubTitle>
                    </SubTitleWrap>
                    <ImageSlider imageUrl={imageUrls[indexValue]} maxSize={maxSize} />
                </InfoWrap>
            )
        } else {
            return (
                <></>
            )
        }
    }

    const linkText = "자세히 보기 >"

    return (
        <Wrapper>
            <InfoWrap>
                <DetailTitle title={agenda.title} activate={agenda.agendaStatus} deleteHandler={deleteHandler} />       
            </InfoWrap>
            {init()}
            <InfoWrap>
                <SubTitleWrap>
                    <SubTitle>투표 현황</SubTitle>
                    <DetailLink to={`/meeting/${meetingId}/${agendaId}1/vote`}>{linkText}</DetailLink>
                </SubTitleWrap>
                <VotePreview data={voteData} />
            </InfoWrap>
            <InfoWrap>
                <DetailSubTitle subtitle="의결식 (%)" />
                <SubContents>
                    <SubForm>
                        <InputBox width="79%" placeholder=" %" />
                        <SubmitButton>적용</SubmitButton>
                    </SubForm>
                </SubContents>
            </InfoWrap>
        </Wrapper>
    )
}