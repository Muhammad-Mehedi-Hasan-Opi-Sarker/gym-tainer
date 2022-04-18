import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            
            <div id='services' className="container mt-4">
            <h1>My Services</h1>
            <div className='services'>
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
            </div>
            
        </div>
        
    );
};

export default Services;