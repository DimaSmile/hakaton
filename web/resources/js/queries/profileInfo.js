import { apiUrl } from "../constants/index";

export function saveProfile(data) {
    return axios.post(apiUrl.PROFILE_DATA, data);
}
