import { useEffect, useState } from "react"
import { PieChart } from "react-minimal-pie-chart"
import styled from "styled-components"
import { ABSTENTION_YELLOW, AGREE_GREEN, BACKGROUND_GRAY, DISAGREE_RED } from "../../../../consts/ColorCodes"

export default function Piechart(props) {

    let chartData = [
        {
            title: "반대",
            value: props.data.disagree,
            color: `${DISAGREE_RED}`
        },
        {
            title: "찬성",
            value: props.data.agree,
            color: `${AGREE_GREEN}`
        },
        {
            title: "기권",
            value: props.data.abstention,
            color: `${ABSTENTION_YELLOW}`
        },
    ]

    const Piechart = styled(PieChart)`
        width: 200px;
        height: 200px;
        margin: 10px;
    `

    return (
        <Piechart
            background={BACKGROUND_GRAY}
            animate={true}
            lineWidth={50}
            data = {chartData}
        />
    )
}