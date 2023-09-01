import { styled, css } from "styled-components"
import { DEFAULT_BLACK, AGREE_GREEN, DISAGREE_RED, ABSTENTION_YELLOW, BACKGROUND_GRAY } from "../../../../consts/ColorCodes"
import Piechart from "./Piechart"

export default function VotePreview(props) {

    const VotePreview = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    `

    const VoteValue = styled.div`
        margin-top: 10px;
        margin-left: 60px;
    `

    const ValueElement = styled.div`
        margin-bottom: 10px;
        width: 100px;
        height: 20px;
        display: flex;
        align-items: center;
    `

    const VoteColorSelector = css`
        ${(props) =>
            css`
                background-color: ${props.backgroundcolor};
            `
        }
    `

    const VoteColor = styled.div`
        width: 12px;
        height: 12px;
        border-radius: 100%;
        ${VoteColorSelector}
    `

    const ElementText = styled.p`
        margin-left: 10px;
        font-size: 15px;
        color: ${DEFAULT_BLACK};
    `

    return (
        <VotePreview>
            <Piechart data={props.data} />
            <VoteValue>
                <ValueElement>
                    <VoteColor backgroundcolor={AGREE_GREEN} />
                    <ElementText>찬성 : {props.data.agree}</ElementText>
                </ValueElement>
                <ValueElement>
                    <VoteColor backgroundcolor={DISAGREE_RED} />
                    <ElementText>반대 : {props.data.disagree}</ElementText>
                </ValueElement>
                <ValueElement>
                    <VoteColor backgroundcolor={ABSTENTION_YELLOW} />
                    <ElementText>기권 : {props.data.abstention}</ElementText>
                </ValueElement>
            </VoteValue>
        </VotePreview>
    )
}