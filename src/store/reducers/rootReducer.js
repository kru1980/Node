import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import authReducer from "./authReducer";
import todosReducer from "./todosReducer";

export default combineReducers({
  routing: routerReducer,
  todos: todosReducer,
  auth: authReducer
});
