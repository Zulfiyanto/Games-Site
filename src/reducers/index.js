import { combineReducers } from "redux";
import gameReducer from "./GamesReducers";

const rootReducer = combineReducers({
  games: gameReducer,
});

export default rootReducer;
