import { teamCalendar as types } from "../constants/";
import * as routes from "../constants/routes";
import { teamCalendar } from "../queries/teamCalendar";
import { history } from "../helpers/history";

export function teamCalendarAction() {
    return dispatch => {
        dispatch(RequestLoading(true));

        teamCalendar()
            .then(response => {
                dispatch(RequestLoading(false));
                if (response.data.success) {
                    dispatch(teamCalendarSuccess(response.data.data));
                } else {
                    dispatch(teamCalendarFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(RequestLoading(false));
            });
    };
    function teamCalendarFailure(errors) {
        return {
            type: types.TEAM_CALENDAR_LOADING,
            errors
        };
    }
    function teamCalendarSuccess(data) {
        return { type: types.TEAM_CALENDAR_SUCCESS, data };
    }
    function RequestLoading(bool) {
        return {
            type: types.TEAM_CALENDAR_LOADING,
            isLoading: bool
        };
    }
}
