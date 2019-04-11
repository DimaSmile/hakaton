import { authConstants as types } from "../constants/";
import { authQueries } from "../queries/auth";

const loginFailure = error => ({
    type: types.LOGIN_FAILURE,
    error
});

const loginSuccess = data => ({
    type: types.LOGIN_SUCCESS,
    data
});

const loginRequestLoading = bool => ({
    type: types.LOGIN_REQUEST_LOADING,
    isLoading: bool
});

export function login(url, userName, password) {
    return dispatch => {
        dispatch(loginRequestLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(loginRequestLoading(false));

                return response;
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                return dispatch(loginSuccess(data));
            })
            .catch(() => dispatch(loginFailure(errors)));
    };
}

const registrationFailure = error => ({
    type: types.REGISTER_FAILURE,
    error
});

const lregistrationSuccess = user => ({
    type: types.REGISTER_SUCCESS,
    user
});

const registrationRequestLoading = bool => ({
    type: types.REGISTER_REQUEST_LOADING,
    isLoading: bool
});

export function registration(user) {
    return dispatch => {
        dispatch(registrationRequestLoading(true));

        authQueries
            .register(user)
            .then(response => {
                dispatch(registrationRequestLoading(false));
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
                    dispatch(lregistrationSuccess(data));
                }
                console.log(response.dta);
            })
            .catch(function(error) {
                console.log(error)
                dispatch(registrationFailure(error));
            });
    };
}
