import { authConstants as types } from "../constants/";
import { authQueries } from "../queries/auth";
import { history } from "../helpers/history";

export function registration(user) {
    return dispatch => {
        dispatch(registrationRequestLoading(true));

        authQueries
            .register(user)
            .then(response => {
                dispatch(registrationRequestLoading(false));
                if (response.data.success) {
                    const yser = {
                        name: response.data.data.name,
                        email: response.data.data.email,
                        id: response.data.data.id
                    };
                    localStorage.setItem(
                        "auth_token",
                        response.data.data.auth_token
                    );
                    dispatch(lregistrationSuccess(user));
                }
            })
            .catch(function(error) {
                dispatch(registrationRequestLoading(false));
                dispatch(registrationFailure(error));
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
                        name: response.data.data.name,
                        email: response.data.data.email,
                        id: response.data.data.id
                    };
                    localStorage.setItem(
                        "auth_token",
                        response.data.data.auth_token
                    );
                    dispatch(loginSuccess(user));
                    history.push("/dashboard");
                }
            })
            .catch(function(error) {
                dispatch(loginRequestLoading(false));
                dispatch(registrationFailure(error));
            });
    };
    function loginFailure(error) {
        return { type: types.LOGIN_FAILURE, error };
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
                    const user = {
                        name: response.data.data.name,
                        email: response.data.data.email,
                        id: response.data.data.id
                    };
                    dispatch(verifySuccess(user));
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
