import ListComponent from "../../components/ListComponent";
import { styled } from "styled-components";
import { css } from "styled-components";
import { DEFAULT_BLACK, DEFAULT_WHITE, ACTIVATE_GREEN, DEACTIVATE_RED, NAV_GRAY } from "../../../../consts/ColorCodes";

export default function MeetingListComponent(props) {
    
    let state = getState(props.state)
    
    const SizeStyle = css`
        ${(props) =>
            css`
                width: ${props.size};
            `
        }
    `

    const ActivateStyle = css`
        ${(props) =>
            props.value === "비활성화" &&
            css`
                width: 80px;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${NAV_GRAY};
                font-size: 12px;
            `
        }

        ${(props) =>
            props.value === "활성화" &&
            css`
                width: 80px;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${ACTIVATE_GREEN};
                font-size: 12px;
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
    
    const MeetingElement = styled.p`
        color: ${DEFAULT_BLACK};
        text-align: center;
        margin: 0px 30px 0px 30px;

        ${SizeStyle}
        ${FontWeightStyle}
        ${ActivateStyle}
    `

    return (
        <ListComponent to={props.to}>
            <MeetingElement weight="600" size="250px">{props.name}</MeetingElement>
            <MeetingElement value={state}>{state}</MeetingElement>
            <MeetingElement size="170px">{props.sponsor}</MeetingElement>
            <MeetingElement size="220px">{props.meetingDate}</MeetingElement>
        </ListComponent>
    )
}

function getState(state) {
    if (state === false) {
        return "비활성화"
    } else if (state === true) {
        return "활성화"
    }
}