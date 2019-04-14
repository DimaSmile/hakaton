import { vocationonstants as types } from "../constants/vocation";
import { sendVocation } from "../queries/vocation";
import { history } from "../helpers/history";
import * as path  from "../constants/routes";

export function sendVocationAction(data) {
    return dispatch => {
        dispatch(sendVocationLoading(true));
        sendVocation(data)
            .then(response => {
                dispatch(sendVocationLoading(false));
                if (response.data.success) {
                    dispatch(usendVocationFSuccess(true));
                    history.push(path.DASHBOARD_HOME)
                } else {
                    dispatch(sendVocationFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(sendVocationLoading(false));
                console.log(error);
            });
    };
    function sendVocationFailure(error) {
        return { type: types.VOCATION_REQUEST_FAILURE, error };
    }
    function usendVocationFSuccess(bool) {
        return { type: types.VOCATION_REQUEST_SUCCESS, bool };
    }
    function sendVocationLoading(bool) {
        return {
            type: types.VOCATION_REQUEST_LOADING,
            isLoading: bool
        };
    }
}
