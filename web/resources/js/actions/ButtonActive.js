import { buttonActiveConstants as types } from "../constants/";
import { buttonActive } from "../queries/buttonActive";

export function ButtonActiveAction(id, status) {
    return dispatch => {
        dispatch(RequestLoading(true));
        buttonActive(id, status)
            .then(response => {
                dispatch(RequestLoading(false));
                if (response.data.success) {
                    dispatch(buttonActiveSuccess(response.data.data));
                } else {
                    dispatch(buttonActiveFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
            });
    };
    function buttonActiveFailure(error) {
        return { type: types.BUTTONACTIVE_FAILURE, error };
    }
    function buttonActiveSuccess(data) {
        return { type: types.BUTTONACTIVE_SUCCESS, data };
    }
    function RequestLoading(bool) {
        return {
            type: types.BUTTONACTIVE_REQUEST_LOADING,
            isLoading: bool
        };
    }
}
