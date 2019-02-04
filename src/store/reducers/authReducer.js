import * as typeActions from "../actions/typeActions";

const initState = {
  auth: [],
  isLoading: false,
  error: null
};

const authReducer = (state = initState, actions) => {
  switch (actions.types) {
    case typeActions.CREATE_USER_START:
      return { ...state, isLoading: true };
    case typeActions.CREATE_USER_SUCCESS:
      return { ...state, auth: [...actions.payload], isLoading: false };
    default:
      return state;
  }
};

export default authReducer;
