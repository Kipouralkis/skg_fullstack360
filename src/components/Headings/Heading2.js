import React from "react";
import "./Heading.css";

function Heading1(props) {
  return (
    <>
      <h2 className="head2">{props.title}</h2>
      <section className="color2"></section>
      <section className="color-tail"></section>
    </>
  );
}

export default Heading1;
