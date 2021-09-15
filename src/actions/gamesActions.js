import axios from "axios";
import {
  popularGamesURL,
  upComingGamesURL,
  newGamesURL,
  searchGamesURL,
} from "../Api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upComingData = await axios.get(upComingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upComing: upComingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (name) => async (dispatch) => {
  const searchGames = await axios.get(searchGamesURL(name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
