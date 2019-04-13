import { dashboardConstants as types } from "../constants/";
import { dashboard } from "../queries/dashboard";

export function dashboardAction(data) {
    console.log("1111");
    return dispatch => {
        dispatch(RequestLoading(true));
        dashboard(data)
            .then(response => {
                dispatch(RequestLoading(false));
                if (response.data.success) {
                    const data = response.data.data;
                    dispatch(dashboardFSuccess(response.data.data));
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
                console.log(error);
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
