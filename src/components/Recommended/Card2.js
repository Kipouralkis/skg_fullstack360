import React from 'react';
import img1 from '../assets/p5.jpg'
import './card_style.css';

function Card2(props) {

    return (
      <div>
        <div className="card">
            <img src={img1} alt="" className="card-img" />
            <div className="card-img-overlay">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>

              {/*overlay*/}
              <div className='overlay'>
              <h5 className="card-title">{props.title}</h5>
              <p className="">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              </div>


            </div>
        </div>
        <p className="bottom-text">Posted on: -Date-</p>
      </div>
    );

}

export default Card2;