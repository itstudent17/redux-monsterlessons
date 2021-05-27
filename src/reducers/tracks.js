const initialState = [
  {
    id: 123,
    name: "My super track",
  },
];

export function trackReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TRACK":
      return [...state, action.payload];
    case "FETCH_TRACKS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
}
