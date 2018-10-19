import * as React from "react";
import * as ReactDOM from "react-dom";
import { createHashHistory } from "history";
import App from "./components/App";

import { Provider } from "react-redux";
import configureStore from "./store";
import "bootstrap/dist/css/bootstrap.css";

const history = createHashHistory({ hashType: "noslash" });
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
