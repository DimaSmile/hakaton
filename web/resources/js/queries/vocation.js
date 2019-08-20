import { apiUrl } from "../constants/index";
import {tokenVal} from '../helpers/auth-header';

export function sendVocation(data) {
    const token = tokenVal();
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
    const token = tokenVal();
    return axios.post(apiUrl.ALL_VACATION, {
        token: token,
        id: id
    });
}
