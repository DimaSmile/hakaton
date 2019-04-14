import { apiUrl } from "../constants/index";

export function sendVocation(data) {
    const token = window.localStorage.getItem("auth_token");
    const dataN = {
        token: token,
        start: data.start,
        end: data.end,
        id: data.id
    };
    console.log(dataN);
    return axios.post(apiUrl.sendVocation, {
        token: token,
        start: data.start,
        end: data.end,
        id: data.id
    });
}
