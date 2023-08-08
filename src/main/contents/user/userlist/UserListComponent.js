import styled, { css } from "styled-components"
import { ACTIVATE_GREEN, DEACTIVATE_RED, DEFAULT_BLACK, DEFAULT_WHITE } from "../../../../consts/ColorCodes"
import ListComponent from "../../components/ListComponent"

export default function UserListComponent(props) {

    let activate = getActivate(props.activate)
    
    const SizeStyle = css`
        ${(props) =>
            css`
                width: ${props.size};
            `
        }
    `

    const ActivateStyle = css`
        ${(props) =>
            props.value === "활성화" &&
            css`
                width: 100px;
                height: 30px;
                line-height: 30px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${ACTIVATE_GREEN};
            `
        }

        ${(props) =>
            props.value === "비활성화" &&
            css`
                width: 100px;
                height: 30px;
                line-height: 30px;
                border-radius: 5px;
                color: ${DEFAULT_WHITE};
                background-color: ${DEACTIVATE_RED};
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
    
    const UserElement = styled.p`
        color: ${DEFAULT_BLACK};
        text-align: center;
        margin: 0px 30px 0px 30px;

        ${SizeStyle}
        ${FontWeightStyle}
        ${ActivateStyle}
    `
    
    
    return (
        <ListComponent to="/">
            <UserElement size="100px" weight="700">{props.name}</UserElement>
            <UserElement value={activate}>{activate}</UserElement>
            <UserElement size="120px">{props.studentNumber}</UserElement>
            <UserElement size="80px">{props.grade}학년</UserElement>
            <UserElement size="150px">{props.college}</UserElement>
            <UserElement size="200px">{props.major}</UserElement>
        </ListComponent>
    )
}

function getActivate(activate) {
    if (activate === "true") {
        return "활성화"
    }
    return "비활성화";
}