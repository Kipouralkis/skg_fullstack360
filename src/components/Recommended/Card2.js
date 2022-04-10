import React from "react";
import img1 from "../assets/p5.jpg";
import "./card_style.css";

import {Link} from 'react-router-dom';
import LandpageProp from "../landingProperty/landpageProp";

function Card2({ property }) {
  return (
    <Link to={`/property/${property._id}`} 
    style={{ textDecoration: 'none', color: "black" }}
    component={<LandpageProp/>}
    >
    <div>
      <div className="card">
        <img src={property.image} alt="" className="card-image" />
        <div className="card-img-overlay">
          <h5 className="rec-card-title">
            {property.category} {property.address}
          </h5>
          <p className="rec-card-text">
            {property.price} € for {property.for}<br></br>
            {property.description.substr(0, 33)}
          </p>

          {/*overlay*/}
          <div className="overlay">
            <p className="overlay-text">{property.description}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Card2;
