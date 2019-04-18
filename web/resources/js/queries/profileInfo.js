import { apiUrl } from "../constants/index";

export function saveProfile(data) {
    return axios.post(apiUrl.SAVE_PROFILE_DATA, data);
}
