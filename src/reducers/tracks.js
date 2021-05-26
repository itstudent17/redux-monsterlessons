const initialState = ["Smells like teen spirit", "Enter sandman"];

export function trackReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TRACK":
      return [...state, action.payload];
    case "DELETE_TRACK":
      return state.filter((track) => track !== action.payload);
    default:
      return state;
  }
}
