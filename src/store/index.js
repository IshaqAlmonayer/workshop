import appReducer from "./reducers";
import {applyMiddleware , compose, createStore} from "redux";
import thunk from "redux-thunk";

export const storeFactory = (initialState= {
    venues: [{name:"10999 Berlin",id:1},{name:"10555 Berlin",id:2},{name:"10222 Berlin",id:3}],
    resturaunt:[{name: "Falafel in Berlin",id:1,type:"Falafel Restaurant",rating:6},
     {name: "Baraka",id:2,type:"Turkish Restaurant",rating:7.8}, {name: "McDonalds",id:2,type:"Gourmet Restaurant",rating:9.8}]
}) => {
    return compose(applyMiddleware(thunk)(createStore)(appReducer,initialState));
}

