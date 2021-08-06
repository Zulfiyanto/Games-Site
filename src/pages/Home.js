import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadGames } from "../actions/gamesActions";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();

  //fetch data
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get that data back
  const { popular, newGames, upComing } = useSelector((state) => state.games);
  return (
    <GameList>
      <h1>Home</h1>
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
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
