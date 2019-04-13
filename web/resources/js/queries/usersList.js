import { apiUrl } from "../constants/index";

export function userList() {
    const token = window.localStorage.getItem("auth_token");
    return axios.get(apiUrl.USERS + token);
}
