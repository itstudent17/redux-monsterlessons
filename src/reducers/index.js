import { combineReducers } from "redux";
import { trackReducer } from "./tracks";
import { playlistReducer } from "./playlists";

// combineReducers() аргументом принимает объект,
// в поля которого будем передавать соответствующие редьюсеры
export const rootReducer = combineReducers({
  tracks: trackReducer,
  playlists: playlistReducer,
});
