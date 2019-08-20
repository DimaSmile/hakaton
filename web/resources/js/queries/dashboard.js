import { apiUrl } from "../constants/index";
import {tokenVal} from '../helpers/auth-header';

export function dashboard() {
    const token = tokenVal();
    return axios.post(apiUrl.DASHBOARD, {
        token: token
    });
}
