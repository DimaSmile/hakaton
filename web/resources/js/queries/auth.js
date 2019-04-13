import { apiUrl } from "../constants/index";

export const authQueries = {
    login,
    register,
    verifyToken
};

function register(user) {
    return axios.post(apiUrl.REGISTRATION, user);
}

function login(user) {
    return axios.post(apiUrl.LOGIN, user);
}

function verifyToken(token) {
    return axios.get(apiUrl.USER_VERIFY + token);
}
