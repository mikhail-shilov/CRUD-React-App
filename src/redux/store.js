import {combineReducers, createStore} from "redux";

import tableReducer from "./table-reducer";

const reducers = combineReducers({
    table: tableReducer
});

let store = createStore(reducers);

export default store;
window.store = store;