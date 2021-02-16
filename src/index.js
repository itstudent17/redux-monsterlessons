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
store.subscribe(() => {
  const list = document.querySelector(".list");
  const li = document.createElement("li");
  li.textContent = store.getState().slice(-1)[0];
  list.appendChild(li);
});

const addTrackBtn = document.querySelector(".addTrack");

addTrackBtn.addEventListener("click", () => {
  const trackName = document.querySelector(".trackInput").value;
  store.dispatch({ type: "ADD_TRACK", payload: trackName });
  document.querySelector(".trackInput").value = "";
});
