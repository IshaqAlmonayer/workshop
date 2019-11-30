import appReducer from "./reducers";
import {applyMiddleware , compose, createStore} from "redux";
import thunk from "redux-thunk";

export const storeFactory = (initialState={}) => {
    return compose(applyMiddleware(thunk)(createStore)(appReducer,initialState));
}
