import * as typeActions from "../actions/typeActions";

const initialState = {
  byId: {},
  allIds: [],
  loading: false,
  error: null
};

// начальное состояние записей тодо в приложении
const initState = {
  todos: [],
  error: null,
  loading: false
};
const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case typeActions.FETCH_TODO_START:
      return {
        ...state,
        loading: true
      };
    case typeActions.FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: [...action.payload],
        loading: false
      };
    case typeActions.FETCH_TODO_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};

export default todosReducer;
