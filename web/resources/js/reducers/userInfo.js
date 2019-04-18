import { userInfoConstants as types } from "../constants";
const initialState = {
    userInfoData: null,
    dataError: null,
    dataLoading: false
};

export function userInfo(state = initialState, action) {
    switch (action.type) {
        case types.USERINFO_REQUEST_LOADING:
            return {
                ...state,
                dataLoading: action.isLoading
            };
        case types.USERINFO_FAILURE:
            return {
                ...state,
                dataError: action.errors
            };
        case types.USERINFO_SUCCESS:
            return {
                ...state,
                userInfoData: action.data
            };
        // return {
        //     ...state,
        //     userInfoData: action.data
        // };

        default:
            return state;
    }
}
