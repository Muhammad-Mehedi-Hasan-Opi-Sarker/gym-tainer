import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const {serviceId}=useParams();
    return (
        <div className='details'>
            <h1>Service Details{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;