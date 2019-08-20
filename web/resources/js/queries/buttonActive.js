import { apiUrl } from "../constants/index";
import {tokenVal} from '../helpers/auth-header';

export function buttonActive(id, status) {
    const token = tokenVal();
    const data = {
        token: token,
        id: id,
        status: status
    };
    return axios.post(apiUrl.BUTTONACTIVE, data);
}
