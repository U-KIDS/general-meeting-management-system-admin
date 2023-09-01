import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useParams } from "react-router-dom";
import { BACKGROUND_GRAY, DEFAULT_WHITE } from "../../../../consts/ColorCodes";

export default function ImageSlider(props) {

    var {meetingId, agendaId, imageIndex} = useParams()

    const ImageWrap = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const ImageElement = styled.img`
        width: 600px;
        height: 400px;
        max-height: 400px;
        border: none;
    `

    const Button = styled(Link)`
        margin: 10px;
        text-decoration: none;
        color: ${BACKGROUND_GRAY};
        font-weight: 600;
        font-size: 40px;
    `

    const BlockedButton = styled.div`
        margin: 10px;
        text-decoration: none;
        color: ${DEFAULT_WHITE};
        font-weight: 600;
        font-size: 40px;
    `

    const prevText = "<"
    const nextText = ">"

    const prevButton = () => {
        if (imageIndex == 0) {
            return (
                <BlockedButton>{prevText}</BlockedButton>
            )
        } else {
            var prevIndex = parseInt(imageIndex) - 1
            return (
                <Button to={`/meeting/${meetingId}/${agendaId}/${prevIndex}`}>{prevText}</Button>
            )
        }
    }

    const nextButton = () => {
        if (props.maxSize < imageIndex) {
            return (
                <BlockedButton>{nextText}</BlockedButton>
            )
        } else {
            var nextIndex = parseInt(imageIndex) + 1
            return (
                <Button to={`/meeting/${meetingId}/${agendaId}/${nextIndex}`}>{nextText}</Button>
            )
        }
    }
    
    return (
        <ImageWrap>
            {prevButton()}
            <ImageElement src={props.imageUrl}></ImageElement>
            {nextButton()}
        </ImageWrap>
    )
}