import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";
const INITIAL_STATE = {
    collections: SHOP_DATA
}

// no modification thats why only default in switch, if any modifications we can add the cases.
export const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}