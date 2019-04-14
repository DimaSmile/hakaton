import { combineReducers } from "redux";
import { user } from "./user";
import { usersList } from "./usersList";
import { dashboard } from "./dashboard";
import { userSettings } from "./profileSettings";
import { userInfo } from "./userInfo";

export default combineReducers({
    user,
    usersList,
    dashboard,
    userSettings,
    userInfo
});
