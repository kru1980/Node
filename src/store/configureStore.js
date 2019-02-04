import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { promise } from "redux-promise";

import rootReducer from "./reducers/rootReducer";

const configureStore = preloadedState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
