export interface RemoveItemAction {
    type: "REMOVE_ITEM";
    payload: {
        name: string;
    };
}

export interface AddItemAction {
    type: "ADD_ITEM";
    payload: {
        name: string;
    };
}

export interface ClearCartItem {
    type: "CLEAR_CART";
}

export const addItemAction = (name: string): AddItemAction => ({
    type: "ADD_ITEM",
    payload: { name },
});
export const removeItemAction = (name: string): RemoveItemAction => ({
    type: "REMOVE_ITEM",
    payload: { name },
});
export const clearCartAction = (): ClearCartItem => ({
    type: "CLEAR_CART",
});