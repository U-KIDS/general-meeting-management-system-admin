import styled, { css } from "styled-components";
import { DEFAULT_WHITE, LIGHT_NAVY, BACKGROUND_GRAY, DEFAULT_BLACK, NAV_GRAY, AGREE_GREEN, ACTIVATE_GREEN, DISAGREE_RED } from "../../../../consts/ColorCodes";
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

    const ActivateButton = styled.button `
        width: 100%;
        height: 60px;
        border-radius: 10px;
        background-color: ${LIGHT_NAVY};
        color: ${DEFAULT_WHITE};
        font-size: 16px;
        border: 2px solid ${LIGHT_NAVY};
        transition: .3s;

        &:hover {
            background-color: ${BACKGROUND_GRAY};
            color: ${LIGHT_NAVY};
        }
    `  

    const ResolveWrap = styled.div`
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
    `

    const ResolveButton = styled.button `
        width: 49%;
        height: 60px;
        border-radius: 10px;
        background-color: ${(props) => props.color};
        color: ${DEFAULT_WHITE};
        font-size: 16px;
        border: 2px solid ${(props) => props.color};
        transition: .3s;

        &:hover {
            background-color: ${BACKGROUND_GRAY};
            color: ${(props) => props.color};
        }
    `
    
    const deleteHandler = () => {
        axios.delete(BASE_URL + `/admin/agenda/${agendaId}`, CONFIG)
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

    const activateButtonHandler = (status) => {
        let url
        if (status === "NOT_STARTED") {
            url = BASE_URL + `/admin/agenda/${agendaId}/start`
        } else if (status === "IN_PROGRESS") {
            url = BASE_URL + `/admin/agenda/${agendaId}/end`
        }

        axios.patch(url)
        .then(() => {
            navigate("/meeting/" + meetingId + "/" +agendaId)
        })
    }

    const getButtons = (agendaStatus, activateButtonHandler) => {
        if (agendaStatus === 'NOT_STARTED') {
            return (
                <InfoWrap>
                    <DetailSubTitle subtitle="조작" />
                    <SubContents>
                        <ActivateButton onClick={() => activateButtonHandler(agendaStatus)}>투표 시작</ActivateButton>
                    </SubContents>
                </InfoWrap>
            )
        } else if (agendaStatus === "IN_PROGRESS") {
            return (
                <InfoWrap>
                    <DetailSubTitle subtitle="조작" />
                    <SubContents>
                        <ActivateButton onClick={() => activateButtonHandler(agendaStatus)}>투표 종료</ActivateButton>
                    </SubContents>
                </InfoWrap>
            )
        } else if (agendaStatus === "COMPLETE") {
            return (
                <InfoWrap>
                    <DetailSubTitle subtitle="결과 입력" />
                    <SubContents>
                        <ResolveWrap>
                            <ResolveButton color={AGREE_GREEN}>찬성</ResolveButton>
                            <ResolveButton color={DISAGREE_RED}>반대</ResolveButton>
                        </ResolveWrap>
                    </SubContents>
                </InfoWrap>
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
            {getButtons(agenda.agendaStatus, activateButtonHandler)}
        </Wrapper>
    )
}