import { combineReducers } from "redux";
import { trackReducer } from "./tracks";
import { playlistReducer } from "./playlists";
import { fiterTracksReducer } from "./filterTracks";
import { routerReducer } from "react-router-redux";

// combineReducers() аргументом принимает объект,
// в поля которого будем передавать соответствующие редьюсеры
export const rootReducer = combineReducers({
  routing: routerReducer,
  tracks: trackReducer,
  playlists: playlistReducer,
  filterTracks: fiterTracksReducer,
});
