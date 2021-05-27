import { connect } from "react-redux";

const Track = ({ track }) => <h3>{track.name}</h3>;

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);
  // а почему не из редьюсера routing???
  return {
    track: state.tracks.find((track) => track.id == ownProps.params.id),
  };
};

export default connect(mapStateToProps)(Track);
