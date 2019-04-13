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
                    console.log("123456");
                    dispatch(dashboardFSuccess(response.data));
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
                console.log(error);
            });
    };
    function dashboardFailure(error) {
        return { type: types.DASHBOARD_REGISTER_FAILURE, error };
    }
    function dashboardFSuccess(users) {
        return { type: types.DASHBOARD_REGISTER_SUCCESS, users };
    }
    function RequestLoading(bool) {
        return {
            type: types.DASHBOARD_REQUEST_LOADING,
            isLoading: bool
        };
    }
}
