import styled from "styled-components"
import { ItemWrapper } from "../helper/ItemWrapper"

export const Toast = styled(ItemWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
    background-color: red;
    font-weight: bolder;
    color: white;
`