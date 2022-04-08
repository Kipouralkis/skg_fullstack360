import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import house from './assets/house.jpg'

const propertyList = ({property}) => {




  return (

    <Card className='card' style={{ width: '13rem'}}>
                <Card.Img variant="top" src={house} />
                <Card.Body>
                    <Card.Title>{property.propertytitle}</Card.Title>
                    <Card.Text>
                     {property.description}
                </Card.Text>
                </Card.Body>
                <Button variant="primary">Go somewhere</Button>
                 
            </Card>
  )
}

export default propertyList