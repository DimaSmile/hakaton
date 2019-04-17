import { authConstants as types } from "../constants/";
import * as routes from "../constants/routes";
import { authQueries } from "../queries/auth";
import { history } from "../helpers/history";
import Echo from "laravel-echo";

export function registration(user) {
    return dispatch => {
        dispatch(registrationRequestLoading(true));

        authQueries
            .register(user)
            .then(response => {
                dispatch(registrationRequestLoading(false));
                if (response.data.success) {
                    const user = {
                        name: response.data.data.name,
                        email: response.data.data.email,
                        id: response.data.data.id
                    };
                    localStorage.setItem(
                        "auth_token",
                        response.data.data.auth_token
                    );
                    dispatch(lregistrationSuccess(user));
                    history.push(routes.DASHBOARD);
                } else {
                    dispatch(registrationFailure(response.data.errors));
                }
            })
            .catch(function(error) {
                dispatch(registrationRequestLoading(false));
            });
    };
    function registrationFailure(error) {
        return { type: types.REGISTER_FAILURE, error };
    }
    function lregistrationSuccess(user) {
        return { type: types.REGISTER_SUCCESS, user };
    }
    function registrationRequestLoading(bool) {
        return {
            type: types.REQUEST_LOADING,
            isLoading: bool
        };
    }
}

export function login(user) {
    return dispatch => {
        dispatch(loginRequestLoading(true));
        authQueries
            .login(user)
            .then(response => {
                dispatch(loginRequestLoading(false));
                if (response.data.success) {
                    const data = {
                        ...response.data.data
                    };
                    delete data["auth_token"];
                    localStorage.setItem(
                        "auth_token",
                        response.data.data.auth_token
                    );
                    dispatch(loginSuccess(data));
                    history.push(routes.DASHBOARD);
                } else {
                    dispatch(loginFailure());
                }
            })
            .catch(function(error) {
                dispatch(loginRequestLoading(false));
            });
    };
    function loginFailure() {
        return { type: types.LOGIN_FAILURE };
    }
    function loginSuccess(user) {
        return { type: types.LOGIN_SUCCESS, user };
    }
    function loginRequestLoading(bool) {
        return {
            type: types.REQUEST_LOADING,
            isLoading: bool
        };
    }
}

export function verifyToken(token) {
    return dispatch => {
        dispatch(verifyRequestLoading(true));
        authQueries
            .verifyToken(token)
            .then(response => {
                dispatch(verifyRequestLoading(false));
                if (response.data.success) {
                    const data = {
                        ...response.data.data
                    };
                    delete data["auth_token"];
                    dispatch(verifySuccess(data));
                }
            })
            .catch(error => {
                window.localStorage.removeItem("auth_token");
                dispatch(verifyFailure(error));
            });
    };
    function verifyFailure(error) {
        return { type: types.LOGIN_FAILURE, error };
    }
    function verifySuccess(user) {
        return { type: types.LOGIN_SUCCESS, user };
    }
    function verifyRequestLoading(bool) {
        return {
            type: types.REQUEST_LOADING,
            isLoading: bool
        };
    }
}

export function LogOut() {
    // console.log(1231232134)
    // Echo.channel('channel')
    // .listen('UserOnline', (e) => {
    //     axios.post("http://localhost:8080/api/user/logout", user);
    //     console.log(55544444455)
    //     console.log(e)
    // });
    // axios.post("http://localhost:8080/api/user/logout", {
    //     token: window.localStorage.getItem("auth_token"),
    //     // user: user
    // });
    // Echo.leave('channel')
    // .leaving((user) => {
    //     console.log(user)
    // })
    // Echo.join('channel')
    //     .leaving((user) => {
    //     // axios.put('/api/user/'+ user.id +'/offline?api_token=' + user.api_token, {});

    // })
    return dispatch => {
        dispatch(logout());
        window.localStorage.removeItem("auth_token");
        history.push(routes.LOGIN);
    };
    function logout() {
        return { type: types.LOGOUT };
    }
}
