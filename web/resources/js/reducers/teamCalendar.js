import { teamCalendar as types } from "../constants/";

const initialState = {
    teamCalendarLoading: false,
    teamCalendarErrors: null,
    teamCalendarData: null
};

export function teamCalendar(state = initialState, action) {
    switch (action.type) {
        case types.TEAM_CALENDAR_LOADING:
            return {
                ...state,
                teamCalendarLoading: action.isLoading
            };
        case types.TEAM_CALENDAR_SUCCESS:
            return {
                ...state,
                teamCalendarData: action.data
            };
        case types.TEAM_CALENDAR_FAILURE:
            return {
                ...state,
                teamCalendarErrors: action.errors           
            };
        default:
            return state;
    }
}
