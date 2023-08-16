import styled, { css } from "styled-components";
import { DEFAULT_WHITE, AGREE_GREEN, DISAGREE_RED, ABSTENTION_YELLOW } from "../../../../consts/ColorCodes";


export default function VoteValue(props) {

    let VoteValue = getVoteValue(props.value)
    
    const ActivateStyle = css`
        ${(props) =>
            props.value === "찬성" &&
            css`
                width: 80px;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${AGREE_GREEN};
            `
        }

        ${(props) =>
            props.value === "반대" &&
            css`
                width: 80px;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${DISAGREE_RED};
            `
        }

        ${(props) =>
            props.value === "기권" &&
            css`
                width: 80px;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${ABSTENTION_YELLOW};
            `
        }
    `

    const Vote = styled.div`
        text-align: center;
        font-size: 12px;
        margin: 0px 30px 0px 30px;
        ${ActivateStyle}
    `

    return (
        <Vote value={VoteValue}>{VoteValue}</Vote>
    )
}

function getVoteValue(value) {
    if (value === "AGREE") {
        return "찬성"
    } else if (value === "DISAGREE") {
        return "반대"
    } else if (value === "ABSTENTION") {
        return "기권" 
    }
}