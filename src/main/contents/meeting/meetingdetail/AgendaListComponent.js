import ListComponent from "../../components/ListComponent";
import styled, { css } from "styled-components"
import { ACTIVATE_GREEN, DEACTIVATE_RED, DEFAULT_BLACK, DEFAULT_WHITE, NAV_GRAY } from "../../../../consts/ColorCodes"

export default function AgendaListComponent(props) {

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
            props.value === "대기중" &&
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
            props.value === "진행중" &&
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

        ${(props) =>
            props.value === "종료" &&
            css`
                width: 80px;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${DEACTIVATE_RED};
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
    
    const AgendaElement = styled.p`
        color: ${DEFAULT_BLACK};
        text-align: center;
        margin: 0px 30px 0px 30px;

        ${SizeStyle}
        ${FontWeightStyle}
        ${ActivateStyle}
    `

    return (
        <ListComponent to={props.to}>
            <AgendaElement size="600px;">{props.name}</AgendaElement>
            <AgendaElement value={state}>{state}</AgendaElement>
            <AgendaElement size="0px;"></AgendaElement>
        </ListComponent>
    )
}

function getState(state) {
    if (state === "NOT_STARTED") {
        return "대기중"
    } else if (state === "IN_PROGRESS") {
        return "진행중"
    } else if (state === "COMPLETE") {
        return "종료"
    }
}