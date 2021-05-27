const mockApiData = [
  {
    id: "1",
    name: "Fade to Black",
  },
  {
    id: "2",
    name: "Welcome Home",
  },
];

export const getTracks = () => (dispatch) => {
  setTimeout(() => {
    console.log("I got tracks");
    dispatch({ type: "FETCH_TRACKS_SUCCESS", payload: mockApiData });
  }, 2000);
};
