import { combineReducers } from "redux";
import { trackReducer } from "./tracks";
import { playlistReducer } from "./playlists";
import { fiterTracksReducer } from "./filterTracks";

// combineReducers() аргументом принимает объект,
// в поля которого будем передавать соответствующие редьюсеры
export const rootReducer = combineReducers({
  tracks: trackReducer,
  playlists: playlistReducer,
  filterTracks: fiterTracksReducer,
});
