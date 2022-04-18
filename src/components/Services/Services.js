import React, { useEffect, useState } from 'react';
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
        <div className='container'>
            <h1>My Services</h1>
            <div className='services'>
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Services;