import styled from "styled-components"
import { ItemWrapper } from "../helper/ItemWrapper"
import { PageText } from "../helper/PageText"


export const Title = styled(PageText)`
    font-size: 20px;
`

export const Container = styled(ItemWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    flex: 0 1 auto;
    gap: 10px;
    border: ${(props) => (props.theme.light ? "1px solid black" : "1px solid white")};
    max-width: 90vw;
`

export const List = styled(ItemWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    flex: 1 1 auto;
    gap: 5px;
`


export const Item = styled.li`
    display: flex;
    gap: 5px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 1 auto;
`

export const InputAreaContainer = styled(ItemWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 1 auto;
    gap: 15px;
`

export const InputContainer = styled(ItemWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;

export const Input = styled.input`
    width: 100%;
    min-width: 50px;
    max-width: 100%;
    flex: 1;
`;

export const Label = styled(PageText)`
    align-self: flex-start;
    width: 100%;
`;