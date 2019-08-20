import { dashboardConstants as types } from "../constants/";
import { dashboard } from "../queries/dashboard";

export function dashboardAction() {
    return dispatch => {
        dispatch(RequestLoading(true));
        dashboard()
            .then(response => {
                dispatch(RequestLoading(false));
                if (response.data.success) {
                    const data = response.data.data;
                    dispatch(dashboardFSuccess(response.data.data));
                }
            })
            .catch(function(error) {  
                dispatch(RequestLoading(false));        
                dispatch(dashboardFailure(error.response.data));                                                      
            });
    };
    function dashboardFailure(error) {
        return { type: types.DASHBOARD_FAILURE, error };
    }
    function dashboardFSuccess(data) {
        return { type: types.DASHBOARD_SUCCESS, data };
    }
    function RequestLoading(bool) {
        return {
            type: types.DASHBOARD_REQUEST_LOADING,
            isLoading: bool
        };
    }
}
