import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import loadDetail from "../actions/detailActions";
import { smallImage } from "../util";

const Card = ({ name, released, image, id }) => {
  // Fix scroll
  const history = useHistory();
  // history.location.pathname === "/"
  //   ? (document.body.style.overflow = "auto")
  //   : (document.body.style.overflow = "hidden");

  //load details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Cards onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h4>{name}</h4>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </Cards>
  );
};

const Cards = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Card;
