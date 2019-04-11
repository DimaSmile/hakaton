import { authConstants as types } from "../constants/auth";

const initialState = {
    isAuth: false,
    registerError: null,
    loginError: null,
    user: null,
    isLoading: false
};

export function user(state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loginError: "Invalid email or password"
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isAuth: true,
                error: null
            };
        case types.REGISTER_FAILURE:
            return {
                ...state,
                registerError: action.error
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isAuth: true,
                error: null
            };
        default:
            return state;
    }
}
