import axios from "axios";
import { popularGamesURL } from "../Api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
