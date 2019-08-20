import { apiUrl } from "../constants/index";
import {tokenVal} from '../helpers/auth-header';

export function usersBirthdayList() {
    const token = tokenVal();
    return axios.get(apiUrl.USERS_BIRTHDAYS_LIST + token);
}
