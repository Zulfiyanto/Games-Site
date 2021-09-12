import { combineReducers } from "redux";
import detailReducers from "./DetailReducers";
import gameReducer from "./GamesReducers";

const rootReducer = combineReducers({
  games: gameReducer,
  detail: detailReducers,
});

export default rootReducer;
