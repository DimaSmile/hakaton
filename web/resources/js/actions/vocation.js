import { vocationonstants as types } from "../constants/vocation";
import { sendVocation } from "../queries/vocation";

export function sendVocationAction(data) {
    console.log("1");
    return dispatch => {
        dispatch(sendVocationLoading(true));
        sendVocation(data)
            .then(response => {
                dispatch(sendVocationLoading(false));
                if (response.data.success) {
                    dispatch(usendVocationFSuccess(true));
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
