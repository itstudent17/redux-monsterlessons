import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { rootReducer } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Как только Redux инициализируется, срабатывает action @@INIT
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
