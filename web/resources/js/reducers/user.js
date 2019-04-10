// import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants";
import { LOGIN_SUCCESS } from "../constants";

const initialState = {
    is_authenticated: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                is_authenticated: true
            };
        default:
            return state;
    }
};
