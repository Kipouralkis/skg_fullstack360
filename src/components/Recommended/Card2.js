import React from 'react';
import img1 from '../assets/p5.jpg'
import './card_style.css';
import house from './../assets/house.jpg'

function Card2({property}) {

    return (
      <div>
        <div className="card">
            <img src={house} alt="" className="card-img" />
            <div className="card-img-overlay">
              <h5 className="card-title">{property.propertytitle}</h5>
              <p className="card-text">
                {property.description}
              </p>

              {/*overlay*/}
              <div className='overlay'>
              <h5 className="card-title">{property.propertytitle}</h5>
              <p className="">
                {property.description}
              </p>
              </div>


            </div>
        </div>
        <p className="bottom-text">Posted on: -Date-</p>
      </div>
    );

}

export default Card2;