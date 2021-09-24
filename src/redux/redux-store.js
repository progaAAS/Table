import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import tableReduser from "./table";
import filterReduser from "./filter";

let reducers = combineReducers({
    table: tableReduser,
    filter: filterReduser
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


window.store = store;


export default store;