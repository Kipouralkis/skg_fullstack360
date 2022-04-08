import React from 'react';
import PropertyCard from './propertyCard';
import './propertyList.css';

const propertyList = ({data}) => {
    
  return (
        <ul className="ul1">
            {data.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}

        </ul>
    )
}



export default propertyList

