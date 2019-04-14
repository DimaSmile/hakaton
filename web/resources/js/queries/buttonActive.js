import { apiUrl } from "../constants/index";

export function buttonActive(id, status) {
    const token = window.localStorage.getItem("auth_token");
    const data = {
        token: token,
        id: id,
        status: status
    };
    console.log(data);
    return axios.post(apiUrl.BUTTONACTIVE, data);
}
