import appReducer from "./reducers";
import {applyMiddleware , compose, createStore} from "redux";
import thunk from "redux-thunk";

export const storeFactory = (initialState= {
    venues: [{name:"falafel",id:1},{name:"KFC",id:2},{name:"Shawerma",id:3}],
    resturaunt:[{name: "kitchinet",id:1}]
}) => {
    return compose(applyMiddleware(thunk)(createStore)(appReducer,initialState));
}

