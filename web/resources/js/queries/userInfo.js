import { apiUrl } from "../constants/index";

export function userInfo() {
    const token = window.localStorage.getItem("auth_token");
    return axios.post(apiUrl.USERINFO, {
        token: token
    });
}
