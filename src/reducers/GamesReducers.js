const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gameReducer = (state = initState) => {
  switch (state.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default gameReducer;
