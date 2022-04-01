import React, { useState } from "react";
import ButtonS from "./UI/ButtonS";
import Container from "./UI/Container";
import classes from "./UI/Container.module.css";

const SearchBar = props => {
  const [enteredLoc, setEnteredLoc] = useState("");
  const [enteredExpanse, setEnteredExpanse] = useState("");
  const [enteredEur, setEnteredEur] = useState("");
  const addSearchHandler = e => {
    e.preventDefault();
    if (
      enteredLoc.trim().length === 0 ||
      enteredExpanse.trim().length === 0 ||
      enteredEur.trim().length === 0
    ) {
      return;
    }
    if (+enteredExpanse < 1) {
      return;
    }
    if (+enteredEur < 1) {
      return;
    }
    console.log(enteredLoc, enteredExpanse, enteredEur);
    setEnteredLoc("");
    setEnteredExpanse("");
    setEnteredEur("");
  };

  const locationChangeHandler = e => {
    setEnteredLoc(e.target.value);
  };
  const expanseChangeHandler = e => {
    setEnteredExpanse(e.target.value);
  };
  const euroChangeHandler = e => {
    setEnteredEur(e.target.value);
  };
  return (
    <Container className={classes.search}>
      <form onSubmit={addSearchHandler}>
        <label htmlFor="location"></label>
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={enteredLoc}
          onChange={locationChangeHandler}
          className={classes.inp}
        />
        <label htmlFor="expanse"></label>
        <input
          id="expanse"
          type="text"
          placeholder="m2"
          value={enteredExpanse}
          onChange={expanseChangeHandler}
          className={classes.inp}
        />
        <label htmlFor="euro"></label>
        <input
          id="euro"
          type="number"
          placeholder="Euro €"
          value={enteredEur}
          onChange={euroChangeHandler}
          min="0"
          className={classes.inp}
        />
        <ButtonS type="submit">Submit </ButtonS>
      </form>
    </Container>
  );
};

export default SearchBar;
