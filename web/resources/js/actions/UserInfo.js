import { userInfoConstants as types } from "../constants/";
import { userInfo } from "../queries/userInfo";

export function userInfoAction() {
    return dispatch => {
        dispatch(RequestLoading(true));
        userInfo()
            .then(response => {
                dispatch(RequestLoading(false));
                if (response.data.success) {
                    dispatch(userListSuccess(response.data.data));
                } else {
                    dispatch(userListFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
                dispatch(userListFailure(error.response.data));
            });
    };
    function userListFailure(error) {
        return { type: types.USERINFO_FAILURE, error };
    }
    function userListSuccess(data) {
        return { type: types.USERINFO_SUCCESS, data };
    }
    function RequestLoading(bool) {
        return {
            type: types.USERINFO_REQUEST_LOADING,
            isLoading: bool
        };
    }
}
