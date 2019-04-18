import { combineReducers } from "redux";
import { user } from "./user";
import { usersBirthdaysList } from "./usersBirthdaysList";
import { dashboard } from "./dashboard";
import { userSettings } from "./profileSettings";
import { userInfo } from "./userInfo";
import { vocation } from "./vocation";
import { buttonActive } from "./buttonActive";
import { teamCalendar } from "./teamCalendar";

export default combineReducers({
    user,
    usersBirthdaysList,
    dashboard,
    userSettings,
    userInfo,
    vocation,
    buttonActive,
    teamCalendar
});
