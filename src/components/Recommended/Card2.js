import React from 'react';
import img1 from '../assets/p5.jpg'
import './card_style.css';


function Card2({property}) {

    return (
      <div>
        <div className="card">
            <img src={property.image} alt="" className="card-img" />
            <div className="card-img-overlay">
              <h5 className="card-title">{property.category}</h5>
              <p className="card-text">
                {property.price}
              </p>

              {/*overlay*/}
              <div className='overlay'>
              {/* <h5 className="card-title">{property.category}</h5> */}
              <p className="">
                {(property.description).slice(1,200)} ...
              </p>
              </div>


            </div>
        </div>
        <p className="bottom-text">Posted on: -Date-</p>
      </div>
    );

}

export default Card2;