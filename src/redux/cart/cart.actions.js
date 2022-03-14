import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

// this is the action we make which goes through the reducer
export const addItem = item => (
    {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
)