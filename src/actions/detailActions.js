import axios from "axios";
import { gameDetailsURL, gameSSURL } from "../Api";

const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const ssData = await axios.get(gameSSURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: ssData.data,
    },
  });
};
export default loadDetail;
