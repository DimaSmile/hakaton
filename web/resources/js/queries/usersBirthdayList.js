import { apiUrl } from "../constants/index";

export function usersBirthdayList() {
    const token = window.localStorage.getItem("auth_token");
    return axios.get(apiUrl.USERS_BIRTHDAYS_LIST + token);
}
