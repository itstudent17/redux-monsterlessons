import React, { useRef } from "react";
import { connect } from "react-redux";
import { getTracks } from "./actions/tracks";
import { Link } from "react-router";

const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks, ownProps }) => {
  console.log("ownProps", ownProps);

  const trackInput = useRef();
  const searchInput = useRef();

  const addTrack = () => {
    console.log("addTrack", trackInput.current.value);
    onAddTrack(trackInput.current.value);
    trackInput.current.value = "";
  };

  const findTrack = () => {
    console.log("findTrack", searchInput.current.value);
    onFindTrack(searchInput.current.value);
  };

  console.log("tracks", tracks);

  return (
    <div>
      <div>
        <input type="text" ref={trackInput} />
        <button onClick={addTrack}>Add Track</button>
      </div>
      <div>
        <input type="text" ref={searchInput} />
        <button onClick={findTrack}>Find Track</button>
      </div>
      <div>
        <button onClick={onGetTracks}>Get tracks</button>
      </div>
      <ul className="list">
        {tracks.map((track) => (
          <li key={track.id}>
            <Link to={`{/tracks/${track.id}}`}>{track.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// аргументом в connect(объект)(Компонент)
// передаем объект с 2мя callback`ами:
// (state) => ({объект со свойствами})
// (dispatch) => ({объект с методами/ в которых уже используется dispatch})

// И свойства из первого возвращаемого объекта, и методы из второго возвращаемого объекта
// доступны в самом компоненте в объекте props
export default connect(
  // mapStateToProps
  (state, ownProps) => ({
    tracks: state.tracks.filter((track) =>
      track.name.includes(state.filterTracks)
    ),
  }),
  // mapDispatchToProps
  (dispatch) => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name,
      };
      dispatch({ type: "ADD_TRACK", payload });
    },
    onFindTrack: (name) => {
      dispatch({ type: "FIND_TRACK", payload: name });
    },
    onGetTracks: () => {
      dispatch(getTracks());
    },
  })
)(App);
