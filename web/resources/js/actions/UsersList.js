import { usersListConstants as types } from "../constants/";
import { userList } from "../queries/usersList";

export function usersListAction() {
    return dispatch => {
        dispatch(RequestLoading(true));
        userList()
            .then(response => {
                dispatch(RequestLoading(false));
                if (response.data.success) {
                    dispatch(userListFSuccess(response.data.data));
                } else {
                    dispatch(userListFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
            });
    };
    function userListFailure(error) {
        return { type: types.USERSLIST_FAILURE, error };
    }
    function userListFSuccess(users) {
        return { type: types.USERSLIST_SUCCESS, users };
    }
    function RequestLoading(bool) {
        return {
            type: types.USERLIST_REQUEST_LOADING,
            isLoading: bool
        };
    }
}
