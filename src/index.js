import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const initialState = ["Smells like teen spirit", "Enter Sandman"];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRACK":
      return [...state, action.payload];
    default:
      break;
  }

  return initialState;
};

// Как только Redux инициализируется, срабатывает action @@INIT
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
