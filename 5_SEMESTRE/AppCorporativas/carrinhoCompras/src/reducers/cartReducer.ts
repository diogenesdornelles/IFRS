export type TItem = {
    name: string,
    quantity: number
}

export type TAction = {
    type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_CART';
    payload?: {
        name: string
    }
}

export type TState = TItem[];

export type TCartReducer = (state: TState, action: TAction) => TState

export const initialState: TState = [];

export function cartReducer(state: TState, action: TAction): TState {
    switch (action.type) {
        case "ADD_ITEM": {
            const itemIndex = state.findIndex(
                (item) => item.name === action.payload!.name
            );
            if (itemIndex > -1) {
                const updatedState = [...state];
                updatedState[itemIndex].quantity += 1;
                return updatedState;
            }
            return [...state, { name: action.payload!.name, quantity: 1 }];
        }
        case "REMOVE_ITEM":
            return state.filter((item) => item.name !== action.payload?.name);
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
}