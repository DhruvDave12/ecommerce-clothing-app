import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});

// this file is for combining all the reducers into one giant object
// and then we pass it