import { dashboardConstants as types } from "../constants";
const initialState = {
    dashboardData: null,
    dataError: null,
    dataLoading: false
};

export function dashboard(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case types.DASHBOARD_REQUEST_LOADING:
            return {
                ...state,
                dataLoading: action.isLoading
            };
        case types.DASHBOARD_REGISTER_FAILURE:
            return {
                ...state,
                dataError: action.errors
            };
        case types.DASHBOARD_REGISTER_SUCCESS:
            return {
                ...state,
                dashboardData: action.data
            };

        default:
            return state;
    }
}
