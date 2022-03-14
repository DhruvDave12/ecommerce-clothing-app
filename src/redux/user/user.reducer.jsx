import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

// if state not set then we use the INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // if our action type match then we make a new object and update it and when we return this 
        // new object then it re-renders
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        // if none action type match we just return the state and it doesnt re-render
        default:
            return state;
    }
}

export default userReducer;