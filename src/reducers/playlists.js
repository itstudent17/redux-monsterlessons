const initialState = ["My home playlist", "My work playlist"];

export function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PLAYLIST":
      return [...state, action.payload];
    case "DELETE_PLAYLIST":
      return state.filter((playlist) => playlist !== action.payload);
    default:
      return state;
  }
}
