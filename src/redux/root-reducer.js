import { combineReducers } from "redux";

// it persist the reducer
import { persistReducer } from "redux-persist";

// we get here the local storage object, we can also use the sessionStorage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    // in white list add the list of reducers we wanna whitelist.
    // no need to whitelist user as it is already being persisted by the firebase
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

// this file is for combining all the reducers into one giant object
// and then we pass it