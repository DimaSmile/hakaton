import { buttonActiveConstants as types } from "../constants";
const initialState = {
    dataSuccess: false,
    dataError: null,
    dataLoading: false
};

export function buttonActive(state = initialState, action) {
    switch (action.type) {
        case types.BUTTONACTIVE_REQUEST_LOADING:
            return {
                ...state,
                dataLoading: action.isLoading
            };
        case types.BUTTONACTIVE_FAILURE:
            return {
                ...state,
                dataError: action.errors
            };
        case types.BUTTONACTIVE_SUCCESS:
            return {
                ...state,
                dataSuccess: action.boolean
            };

        default:
            return state;
    }
}
