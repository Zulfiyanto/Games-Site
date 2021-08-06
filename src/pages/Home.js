import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
