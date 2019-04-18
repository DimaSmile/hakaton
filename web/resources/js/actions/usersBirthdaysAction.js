import { usersBirthdaysConstants as types } from "../constants";
import { usersBirthdayList } from "../queries/usersBirthdayList";

export function usersBirthdaysAction() {
    return dispatch => {
        dispatch(usersBirthdaysRequestLoading(true));
        usersBirthdayList()
            .then(response => {
                dispatch(usersBirthdaysRequestLoading(false));
                if (response.data.success) {
                    dispatch(usersBirthdaysRequestSuccess(response.data.data));
                } else {
                    dispatch(
                        usersBirthdaysRequestFailure(response.data.errors)
                    );
                }
            })
            .catch(function(error) {
                dispatch(usersBirthdaysRequestLoading(false));
            });
    };
    function usersBirthdaysRequestFailure(error) {
        return { type: types.USERS_BIRTHDAYS_FAILURE, error };
    }
    function usersBirthdaysRequestSuccess(users) {
        return { type: types.USERS_BIRTHDAYS_SUCCESS, users };
    }
    function usersBirthdaysRequestLoading(bool) {
        return {
            type: types.USERS_BIRTHDAYS_REQUEST_LOADING,
            isLoading: bool
        };
    }
}
