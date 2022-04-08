import React from "react";
import Carousel from "react-elastic-carousel";
import Card2 from "./Card2"
import "./carousel_style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 970, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];



function CarouselE({data}) {
  return (
    <div id="carousel-wrapper">
      <div className="Carousel">

        <Carousel breakPoints={breakPoints}>
        
        {data.slice(1,6).map(property => (
          <Card2 key={property.id} property={property}/>
          ))}  
               
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselE;
