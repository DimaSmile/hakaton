import * as actions from "../constants";

export const loginAction = user => ({
    type: actions.LOGIN_SUCCESS,
    payload: user
});
