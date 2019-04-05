import { createStore, combineReducers } from "redux";

import user from "../reducers/user";

export default function configureStore(initialState) {
    const devTools =
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
    const store = createStore(
        user,
        // combineReducers({
        //     user
        //     //   tracker,
        //     //   plugins,
        //     //   theme,
        //     //   form: formReducer,
        // }),
        devTools,
        initialState
    );
    return store;
}
