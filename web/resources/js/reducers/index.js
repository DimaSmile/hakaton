import { combineReducers } from "redux";
import { user } from "./user";
import { usersList } from "./usersList";
import { dashboard } from "./dashboard";

export default combineReducers({
    user,
    usersList,
    dashboard
});
