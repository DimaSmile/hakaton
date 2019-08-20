import { apiUrl } from "../constants/index";
import {tokenVal} from "../helpers/auth-header";

export function teamCalendar() {
    const token = tokenVal();
    return axios.post(apiUrl.TEAM_CALENDAR, {
        token: token
    });
}
