import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id,img,price,discription1,discription2,discription3,discription4,time } = service;
    const navigate =useNavigate();
    const handleHire=(id)=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='mt-4'>
            <div className="card service-border" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 style={{color:'rgba(243, 111, 33, 0.86'}} className="card-title">{time}</h5>
                        <p class="card-text">{discription1}</p>
                        <p class="card-text">{discription2}</p>
                        <p class="card-text">{discription3}</p>
                        <p class="card-text">{discription4}</p>
                        <p class="card-text">{price}</p>
                        <button onClick={()=>handleHire(id,img,price,time)} className='btn'>Hire me</button>
                    </div>
            </div>
        </div>
    );
};

export default Service;