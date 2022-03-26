import React from "react";
import Carousel from "react-elastic-carousel";
import Card2 from "./Card2";
import "./carousel_style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 970, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];



function CarouselE() {
  return (
    <>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
          <Card2 title="Title 1"/>
          <Card2 title="Title 2"/>
          <Card2 title="Title 3"/>
          <Card2 title="Title 4"/>
          <Card2 title="Title 5"/>
          <Card2 title="Title 6"/>
          <Card2 title="Title 7"/>
          <Card2 title="Title 8"/>
          <Card2 title="Title 9"/>
          <Card2 title="Title 10"/>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselE;