import { authConstants as types } from "../constants/";
import * as routes from "../constants/routes";
import { saveProfile } from "../queries/profileInfo";
import { history } from "../helpers/history";

export function saveProfileInfo(data) {
    return dispatch => {
        dispatch(RequestLoading(true));

        saveProfile(data)
            .then(response => {
                dispatch(RequestLoading(false));
                if (response.data.success) {
                    // console.log(response);
                } else {
                    // console.log(response);
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
                console.log(error);
            });
    };
    function saveProfileInfoFailure(error) {
        return { type: types.REGISTER_FAILURE, error };
    }
    function saveProfileInfoSuccess(user) {
        return { type: types.REGISTER_SUCCESS, user };
    }
    function RequestLoading(bool) {
        return {
            type: types.REQUEST_LOADING,
            isLoading: bool
        };
    }
}
