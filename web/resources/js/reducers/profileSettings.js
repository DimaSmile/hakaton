import { profSettingsConstants as types } from "../constants/";

const initialState = {
    profileSettingsLoading: false,
    profileSettingsErrors: null
};

export function userSettings(state = initialState, action) {
    switch (action.type) {
        case types.PROFILE_SETTINGS_LOADING:
            return {
                ...state,
                profileSettingsLoading: action.isLoading
            };
        case types.PROFILE_SETTINGS_SUCCESS:
            return {
                ...state,
                profileSettingsErrors: null
            };
        case types.PROFILE_SETTINGS_FAILURE:
            return {
                ...state,
                profileSettingsErrors: action.errors
            };
        default:
            return state;
    }
}
