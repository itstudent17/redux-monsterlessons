import React from "react";
import { connect } from "react-redux";

const App = ({ testState }) => {
  console.log("props.testState", testState);
  return (
    <div>
      <input type="text" />
      <button>Add Track</button>
      <ul class="list">
        {testState.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ul>
    </div>
  );
};

export default connect(
  (state) => ({
    // mapStateToProps
    testState: state,
  }),
  (dispatch) => ({}) // mapDispatchToProps
)(App);
