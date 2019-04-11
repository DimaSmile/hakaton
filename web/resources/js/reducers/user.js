import { authConstants as types } from "../constants/auth";

const initialState = {
    isAuth: false,
    error: null,
    user: null,
    isLoading: false
};

export function user(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.data
            };
        case types.REGISTER_REQUEST_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case types.REGISTER_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}
