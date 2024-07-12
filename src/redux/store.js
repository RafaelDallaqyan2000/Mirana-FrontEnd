import {createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const middlewares = [thunk]

const store = createStore(
    combineReducers({
        ...rootReducer,
    }),
    applyMiddleware(...middlewares)
);
export default store;