import React from "react";
import classes from "./Button.module.css";

const ButtonS = props => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      Submit
    </button>
  );
};

export default ButtonS;
