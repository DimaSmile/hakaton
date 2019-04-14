import { profSettingsConstants as types } from "../constants/";
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
                    dispatch(saveProfileInfoSuccess(response.data.data));
                    history.push(routes.DASHBOARD_HOME)
                } else {
                    dispatch(saveProfileInfoFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
                console.log(error);
            });
    };
    function saveProfileInfoFailure(errors) {
        return { type: types.PROFILE_SETTINGS_FAILURE, errors };
    }
    function saveProfileInfoSuccess(data) {
        return { type: types.PROFILE_SETTINGS_SUCCESS, data };
    }
    function RequestLoading(bool) {
        return {
            type: types.PROFILE_SETTINGS_LOADING,
            isLoading: bool
        };
    }
}
