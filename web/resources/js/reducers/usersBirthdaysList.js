import { usersBirthdaysConstants as types } from "../constants";

const initialState = {
    users: null,
    usersIsLoading: false,
    usersErrors: null
};

export function usersBirthdaysList(state = initialState, action) {
    switch (action.type) {
        case types.USERS_BIRTHDAYS_REQUEST_LOADING:
            return {
                ...state,
                usersIsLoading: action.isLoading
            };
        case types.USERS_BIRTHDAYS_FAILURE:
            return {
                ...state,
                usersErrors: action.errors
            };
        case types.USERS_BIRTHDAYS_SUCCESS:
            return {
                ...state,
                users: action.users
            };

        default:
            return state;
    }
}
