import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";

import { LocaleProvider } from "antd";
import ru_RU from "antd/lib/locale-provider/ru_RU";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <LocaleProvider locale={ru_RU}>
        <App />
      </LocaleProvider>
    </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
