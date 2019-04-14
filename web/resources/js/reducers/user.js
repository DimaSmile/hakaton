import * as types from "../constants/";

const initialState = {
    isAuth: false,
    registerError: null,
    loginError: null,
    user: null,
    isLoading: false
};

export function user(state = initialState, action) {
    switch (action.type) {
        case types.authConstants.REQUEST_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case types.authConstants.LOGIN_FAILURE:
            return {
                ...state,
                loginError: "Invalid email or password"
            };
        case types.authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isAuth: true,
                error: null
            };
        case types.authConstants.REGISTER_FAILURE:
            return {
                ...state,
                registerError: action.error
            };
        case types.authConstants.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isAuth: true,
                error: null
            };
        case types.profSettingsConstants.PROFILE_SETTINGS_SUCCESS:
            return {
                ...state,
                user: action.data
            };
        case types.authConstants.LOGOUT:
            return {
                ...state,
                user: null,
                isAuth: false
            };
        default:
            return state;
    }
}
