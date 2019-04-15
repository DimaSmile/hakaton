import { teamCalendar } from "../queries/teamCalendar";

export const apiUrl = {
    REGISTRATION: "http://localhost:8080/api/user/register",
    LOGIN: "http://localhost:8080/api/user/login",
    USER_VERIFY: "http://localhost:8080/api/user/list?token=",
    PROFILE_DATA: "http://localhost:8080/api/user/save-profile",
    USERS: "http://localhost:8080/api/users/list?token=",
    DASHBOARD: "http://localhost:8080/api/get-dashboad-info",
    USERINFO: "http://localhost:8080/api/get-team-info",
    sendVocation: "http://localhost:8080/api/set-vacation",
    BUTTONACTIVE: "http://localhost:8080/api/get-track-info",
    TEAM_CALENDAR: "http://localhost:8080/api/get-team-calendar-info",
    ALL_VACATION: "http://localhost:8080/api/get-vacations"
};