import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
    collections: SHOP_DATA
}

// no modification thats why only default in switch, if any modifications we can add the cases.
export const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}