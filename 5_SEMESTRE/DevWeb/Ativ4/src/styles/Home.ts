import styled from "styled-components"
import { ItemWrapper } from "../helper/ItemWrapper"

export const Container = styled(ItemWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${(props) => (props.theme.light ? "white" : "black")};
    color: ${(props) => (props.theme.light ? "black" : "white")};
`