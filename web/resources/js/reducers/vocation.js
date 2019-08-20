import { vocationonstants as types } from "../constants";

const initialState = {
    requestLoading: false,
    requestSuccess: false,
    usersErrors: null,
    vacationData: null,
    vacationDataLoading: false,
    vacationDataErrors: null
};

export function vocation(state = initialState, action) {
    switch (action.type) {
        case types.VOCATION_REQUEST_LOADING:
            return {
                ...state,
                requestLoading: action.isLoading
            };
        case types.VOCATION_REQUEST_SUCCESS:
            return {
                ...state,
                requestSuccess: action.bool
            };
        case types.VOCATION_REQUEST_FAILURE:
            return {
                ...state,
                users: action.users,
            };
        case types.GET_ALL_VACATION_LOADING:
            return {
                ...state,
                vacationData: false,
                vacationDataLoading: action.isLoading
            };
        case types.GET_ALL_VACATION_SUCCESS:
            return {
                ...state,
                vacationData: action.data
            };
        case types.GET_ALL_VACATION_FAILURE:
            return {
                ...state,
                vacationDataErrors: action.error.message
            };

        default:
            return state;
    }
}
