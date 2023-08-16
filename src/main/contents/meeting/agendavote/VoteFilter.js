import styled from "styled-components"
import { DEFAULT_BLACK, DEFAULT_WHITE, LIGHT_NAVY } from "../../../../consts/ColorCodes"

export default function VoteFilter() {
    
    const FilterForm = styled.form`
        height: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    `

    const SelectInput = styled.select`
        background-color: ${DEFAULT_WHITE};
        color:${DEFAULT_BLACK};
        margin-right: 20px;
        width: 120px;
        height: 30px;
        border-radius: 5px;
        padding-left: 7px;
        padding-right: 7px;
        outline: none;
    `

    const TextInput = styled.input`
        background-color: ${DEFAULT_WHITE};
        color:${DEFAULT_BLACK};
        margin-right: 20px;
        width: 230px;
        height: 30px;
        border-radius: 5px;
        padding-left: 10px;
        outline: none;
    `

    const SubmitButton = styled.input`
        background-color: ${LIGHT_NAVY};
        color:${DEFAULT_WHITE};
        width: 80px;
        height: 30px;
        border-radius: 5px;
    `

    return (
        <FilterForm>
            <div>
                <SelectInput id="value" name="value">
                    <option value="AGREE">찬성</option>
                    <option value="DISAGREE">반대</option>
                    <option value="ABSTENTION">기권</option>
                </SelectInput>
                <TextInput type="text" placeholder="이름"></TextInput>
            </div>
            <SubmitButton value="검색" type="submit"></SubmitButton>
        </FilterForm>
    )
}