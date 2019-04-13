import { apiUrl } from "../constants/index";

export function dashboard() {
    const token = window.localStorage.getItem("auth_token");
    return axios.post(apiUrl.DASHBOARD, {
        token: token
    });
}
