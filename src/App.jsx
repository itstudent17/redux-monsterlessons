import React, { useRef } from "react";
import { connect } from "react-redux";

const App = ({ testState, onAddTrack }) => {
  const trackInput = useRef();

  const addTrack = () => {
    console.log("addTrack", trackInput.current.value);
    onAddTrack(trackInput.current.value);
    trackInput.current.value = "";
  };

  console.log("props.testState", testState);

  return (
    <div>
      <input type="text" ref={trackInput} />
      <button onClick={addTrack}>Add Track</button>
      <ul class="list">
        {testState.tracks.map((track) => (
          <li key={track}>{track}</li>
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
  (state) => ({
    // mapStateToProps
    testState: state,
  }),
  (dispatch) => ({
    onAddTrack: (trackName) => {
      dispatch({ type: "ADD_TRACK", payload: trackName });
    },
  }) // mapDispatchToProps
)(App);
