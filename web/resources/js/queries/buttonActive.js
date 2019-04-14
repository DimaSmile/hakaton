import { apiUrl } from "../constants/index";

export function buttonActive(id, status) {
    const token = window.localStorage.getItem("auth_token");
    const data = {
        token: token,
        id: id,
        status: status
    };
    return axios.post(apiUrl.BUTTONACTIVE, data);
}
