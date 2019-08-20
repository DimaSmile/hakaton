export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
        return { Authorization: "Bearer " + user.token };
    } else {
        return {};
    }
}

export function tokenVal() {
    let token = window.localStorage.getItem("auth_token") || window.sessionStorage.getItem("auth_token");
    return token;
}