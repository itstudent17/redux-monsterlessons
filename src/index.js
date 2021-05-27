import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { rootReducer } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { syncHistoryWithStore } from "react-router-redux";
import { Router, Route, hashHistory } from "react-router";
import Track from "./Track";

const About = () => <h1>This is about page</h1>;

// Как только Redux инициализируется, срабатывает action @@INIT
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/tracks/:id" component={Track} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
