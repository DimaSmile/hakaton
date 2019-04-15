import { vocationonstants as types } from "../constants/vocation";
import { sendVocation, getAllVocations } from "../queries/vocation";
import { history } from "../helpers/history";
import * as path from "../constants/routes";

export function sendVocationAction(data) {
    return dispatch => {
        dispatch(sendVocationLoading(true));
        sendVocation(data)
            .then(response => {
                dispatch(sendVocationLoading(false));
                if (response.data.success) {
                    dispatch(usendVocationFSuccess(true));
                    history.push(path.DASHBOARD_HOME);
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

export function getAllVacation(id) {
    return dispatch => {
        dispatch(getAllVacationLoading(true));
        getAllVocations(id)
            .then(response => {
                dispatch(getAllVacationLoading(false));
                console.log(response);
                if (response.data.success) {
                    dispatch(getAllVacationSuccess(response.data.data));
                } else {
                    dispatch(getAllVacationFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(getAllVacationLoading(false));
                console.log(error);
            });
    };
    function getAllVacationFailure(error) {
        return { type: types.GET_ALL_VACATION_FAILURE, error };
    }
    function getAllVacationSuccess(data) {
        return { type: types.GET_ALL_VACATION_SUCCESS, data };
    }
    function getAllVacationLoading(bool) {
        return {
            type: types.GET_ALL_VACATION_LOADING,
            isLoading: bool
        };
    }
}
