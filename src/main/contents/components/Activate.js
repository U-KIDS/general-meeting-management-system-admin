import styled, { css } from "styled-components";
import { DEFAULT_WHITE, ACTIVATE_GREEN, DEACTIVATE_RED } from "../../../consts/ColorCodes";


export default function Activate(props) {

    let ActivateValue = getActivate(props.value)
    
    const ActivateStyle = css`
        ${(props) =>
            props.value === "활성화" &&
            css`
                width: 80px;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${ACTIVATE_GREEN};
            `
        }

        ${(props) =>
            props.value === "비활성화" &&
            css`
                width: 80px;
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${DEACTIVATE_RED};
            `
        }
    `

    const Activate = styled.div`
        text-align: center;
        font-size: 12px;
        ${ActivateStyle}
    `

    return (
        <Activate value={ActivateValue}>{ActivateValue}</Activate>
    )
}

function getActivate(activate) {
    if (activate === "true") {
        return "활성화"
    }
    return "비활성화";
}