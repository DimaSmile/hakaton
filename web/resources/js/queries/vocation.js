import { apiUrl } from "../constants/index";

export function sendVocation(data) {
    const token = window.localStorage.getItem("auth_token");
    const dataN = {
        token: token,
        start: data.start,
        end: data.end,
        id: data.id
    };
    return axios.post(apiUrl.sendVocation, {
        token: token,
        start: data.start,
        end: data.end,
        id: data.id
    });
}

export function getAllVocations(id) {
    const token = window.localStorage.getItem("auth_token");
    return axios.post(apiUrl.ALL_VACATION, {
        token: token,
        id: id
    });
}
