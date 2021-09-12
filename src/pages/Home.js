import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { loadGames } from "../actions/gamesActions";
import Card from "../components/Card";
import GameDetail from "../components/GameDetails";

const Home = () => {
  // get currrent location
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get that data back
  const { popular, newGames, upComing } = useSelector((state) => state.games);
  return (
    <GameList>
      {path && <GameDetail />}
      {/* //Upcoming games */}
      <h1>Upcoming Games</h1>
      <Games>
        {upComing.map((game) => (
          <Card
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      {/* //Popular Games */}
      <h1>Popular Games</h1>
      <Games>
        {popular.map((game) => (
          <Card
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      {/* //New Games */}
      <h1>New Games</h1>
      <Games>
        {newGames.map((game) => (
          <Card
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h1 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
