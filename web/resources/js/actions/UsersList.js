import { usersListConstants as types } from "../constants/";
import { userList } from "../queries/usersList";

export function usersListAction(data) {
    console.log("1111");
    return dispatch => {
        dispatch(RequestLoading(true));
        userList(data)
            .then(response => {
                dispatch(RequestLoading(false));
                console.log(response);
                if (response.data.success) {
                    dispatch(userListFSuccess(response.data.data));
                } else {
                    dispatch(userListFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
                console.log(error);
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
