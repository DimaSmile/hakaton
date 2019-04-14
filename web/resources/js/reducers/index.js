import { combineReducers } from "redux";
import { user } from "./user";
import { usersList } from "./usersList";
import { dashboard } from "./dashboard";
import { userSettings } from "./profileSettings";

export default combineReducers({
    user,
    usersList,
    dashboard,
    userSettings
});
