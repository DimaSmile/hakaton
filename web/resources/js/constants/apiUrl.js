import { teamCalendar } from "../queries/teamCalendar";

var getUrl = window.location;
var baseUrl = getUrl.host + "/";

export const apiUrl = {
    REGISTRATION: "http://"+baseUrl+"api/user/register",
    LOGIN: "http://"+baseUrl+"api/user/login",
    USER_VERIFY: "http://" + baseUrl + "api/user/list?token=",
    DASHBOARD: "http://" + baseUrl + "api/get-dashboad-info",
    USERS_BIRTHDAYS_LIST: "http://" + baseUrl + "api/users/list?token=",
    SAVE_PROFILE_DATA: "http://" + baseUrl + "api/user/save-profile",

    USERINFO: "http://" + baseUrl + "api/get-team-info",
    sendVocation: "http://" + baseUrl + "api/set-vacation",
    BUTTONACTIVE: "http://" + baseUrl + "api/get-track-info",
    TEAM_CALENDAR: "http://" + baseUrl + "api/get-team-calendar-info",
    ALL_VACATION: "http://" + baseUrl + "api/get-vacations"
};
