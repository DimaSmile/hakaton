import { apiUrl } from "../constants/index";
import {tokenVal} from '../helpers/auth-header';

export function userInfo() {
    const token = tokenVal();
    return axios.post(apiUrl.USERINFO, {
        token: token
    });
}
