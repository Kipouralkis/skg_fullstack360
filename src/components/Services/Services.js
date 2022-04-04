import React, { Component } from 'react';
import ServiceCard from './ServiceCard';

class Services extends Component{
    render(){
        return(
            <div className="container-fluid justify-content-center container">
                <div className="row">
                    <div className="col-sm"> <ServiceCard title='Place Your Listing'/></div>
                    <div className="col-sm"> <ServiceCard title='Email Alerts'/> </div>
                    <div className="col-sm"> <ServiceCard title='Offers from Professionals'/> </div>
                </div>
            </div>
        );
    }
}

export default Services;