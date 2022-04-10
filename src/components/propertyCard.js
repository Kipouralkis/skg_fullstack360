
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import LandpageProp from "./landingProperty/landpageProp";



const propertyList = ({ property }) => {
  return (
    <Link to={`/property/${property._id}`} 
    style={{ textDecoration: 'none', color: "black" }}
    component={<LandpageProp/>}
    >
    <Card style={{margin:"5px", height:"460px"}}>
      <Card.Img variant="top" src={property.image} />
      <Card.Body>
        <Card.Title>{property.category} {property.price}€</Card.Title>
        <Card.Text>
          <h6>{property.address}</h6>
          <br></br>
          {property.description.substr(0,100)}</Card.Text>
      </Card.Body>    
      
    </Card>
    </Link>
  );
};
 
 

export default propertyList
