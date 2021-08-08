import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import loadDetail from "../actions/detailActions";

const Card = ({ name, released, image, id }) => {
  //load details
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <Cards onClick={loadDetailsHandler}>
      <h4>{name}</h4>
      <p>{released}</p>
      <img src={image} alt={name} />
    </Cards>
  );
};

const Cards = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 0rem 0rem 1rem 1rem;
  }
`;
export default Card;
