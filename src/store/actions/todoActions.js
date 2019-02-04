import * as typeActions from "./typeActions";
// import axios from "axios"
const axios = require("axios");

// actions creators (генераторы действия)

export const fetchTodoStart = () => {
  return {
    type: typeActions.FETCH_TODO_START
  };
};
export const fetchTodoSussess = todos => {
  return {
    type: typeActions.FETCH_TODO_SUCCESS,
    payload: todos
  };
};
export const fetchTodoFail = error => {
  return {
    type: typeActions.FETCH_TODO_FAIL,
    payload: error
  };
};

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodoStart());

    // пишем запрос к серверу на аксиос
    try {
      axios
        .get("/api/todos")
        .then(response => response.data)
        .then(data => dispatch(fetchTodoSussess(data)));
    } catch (error) {
      dispatch(fetchTodoFail(error.message));
    }
  };
};
