import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const propertyList = ({property}) => {


  return (

    <Card className='card' style={{ width: '13rem'}}>
                <Card.Img variant="top" src={property.image} />
                <Card.Body>
                    <Card.Title>{property.category}</Card.Title>
                    <Card.Text>
                     {(property.description).slice(1,20)}
                </Card.Text>
                </Card.Body>  
                <Button variant="primary">Go somewhere</Button>
                 
            </Card>
  )
}

export default propertyList