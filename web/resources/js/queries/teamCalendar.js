import { apiUrl } from "../constants/index";

export function teamCalendar() {
    return axios.post(apiUrl.TEAM_CALENDAR, {
        token: window.localStorage.getItem("auth_token")
    });
}
