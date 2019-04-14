import { vocationonstants as types } from "../constants";

const initialState = {
    requestLoading: false,
    requestSuccess: false,
    usersErrors: null
};

export function vocation(state = initialState, action) {
    switch (action.type) {
        case types.VOCATION_REQUEST_LOADING:
            console.log(action.bool);
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
                users: action.users
            };

        default:
            return state;
    }
}
