import React from 'react';
import './Services.css';

function ServiceCard(props) {

    return (
      <div>
        <div className="service-card">
            <h5 className="service-title">{props.title}</h5>
            <hr></hr>
            <p className='service-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua
            <br></br>
            <br></br>
            <a className='link' href="/">More{'>>'}</a>
            </p>
        </div>
      </div>
    );

}

export default ServiceCard;