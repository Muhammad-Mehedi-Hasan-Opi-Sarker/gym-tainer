import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const {serviceId}=useParams();
    return (
        <div className='details'>
            <h1 className='hire'>Let's hire me !</h1>
        <Link to='/checkout'>
            <button className='btn'>Confirm Hire</button>
        </Link>
        </div>
    );
};

export default ServiceDetails;