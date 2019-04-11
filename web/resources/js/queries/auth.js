import { authHeader } from "../helpers/auth-header";
import { apiUrl } from "../constants/index";
const api = '"http://some_api_here';

export const authQueries = {
    login,
    logout,
    register,
    verifyToken
};

function register(user) {
    return axios.post(apiUrl.REGISTRATION, user);
}

function login(userName, password) {
    const requestOptions = {
        methd: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    };
    return fetch(api, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("user", JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
}

function verifyToken() {
    const requesOptions = {
        method: "GET",
        headers: authHeader()
    };
    return fetch(api, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
