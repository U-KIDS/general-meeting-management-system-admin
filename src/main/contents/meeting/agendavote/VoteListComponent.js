import ListComponent from "../../components/ListComponent";
import { styled } from "styled-components";
import { css } from "styled-components";
import { DEFAULT_BLACK, DEFAULT_WHITE, ACTIVATE_GREEN, DEACTIVATE_RED, NAV_GRAY } from "../../../../consts/ColorCodes";
import VoteValue from "./VoteValue";

export default function VoteListComponent(props) {

    const SizeStyle = css`
        ${(props) =>
            css`
                width: ${props.size};
            `
        }
    `

    const FontWeightStyle = css`
        ${(props) =>
            css`
                font-weight: ${props.weight};
            `
        }
    `

    const VoteElement = styled.p`
        color: ${DEFAULT_BLACK};
        text-align: center;
        margin: 0px 30px 0px 30px;

        ${SizeStyle}
        ${FontWeightStyle}
    `

    return (
        <ListComponent>
            <VoteElement size="200px" weight="600">김멋사</VoteElement>
            <VoteValue value="AGREE" />
            <VoteElement size="100px">20194059</VoteElement>
            <VoteElement size="300px">컴퓨터소프트웨어공학과</VoteElement>
        </ListComponent>
    )
}