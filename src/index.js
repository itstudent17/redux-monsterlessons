import { createStore } from "redux";

// reducer
function playlist(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TRACK":
      return [...state, action.payload];
  }

  return state;
}

// createStore from Redux
const store = createStore(playlist);

// console.log(store.getState());
store.subscribe(() => console.log("subscribe", store.getState()));

store.dispatch({ type: "ADD_TRACK", payload: "Smells like teen spirit" });
store.dispatch({ type: "ADD_TRACK", payload: "Enter Sandman" });
