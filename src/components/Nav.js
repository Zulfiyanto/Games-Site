import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchSearch } from "../actions/gamesActions";
import { fadeIn } from "../animation";
import logo from "../img/logo.svg";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h3>Game Site</h3>
      </Logo>
      <Search>
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </Search>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    background-color: white;
    width: 2rem;
  }
`;
const Search = styled(motion.div)`
  width: 100%;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 1px solid rgba(95, 99, 116, 0.2);
    margin-top: 1rem;
    box-shadow: 0 5px 10px rgba(124, 127, 141, 0.05),
      0 15px 40px rgba(123, 129, 150, 0.2);
    outline: none;
    border-radius: 5px;
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #000000ff;
    color: white;
  }
`;

export default Nav;
