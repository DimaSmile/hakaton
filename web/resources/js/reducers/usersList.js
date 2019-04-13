import { usersListConstants as types } from "../constants";
import { CardActions } from "@material-ui/core";

const initialState = {
    users: null,
    usersIsLoading: false,
    usersErrors: null
};

export function usersList(state = initialState, action) {
    switch (action.type) {
        case types.USERLIST_REQUEST_LOADING:
            return {
                ...state,
                usersIsLoading: action.isLoading
            };
        case types.USERSLIST_FAILURE:
            return {
                ...state,
                usersErrors: action.errors
            };
        case types.USERSLIST_SUCCESS:
            return {
                ...state,
                users: action.users
            };

        default:
            return state;
    }
}
