import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { img,price,discription1,discription2,discription3,discription4,time } = service;
    return (
        <div className=''>
            <div className="card service-border" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 style={{color:'rgba(243, 111, 33, 0.86'}} className="card-title">{time}</h5>
                        <p class="card-text">{discription1}</p>
                        <p class="card-text">{discription2}</p>
                        <p class="card-text">{discription3}</p>
                        <p class="card-text">{discription4}</p>
                        <p class="card-text">{price}</p>
                        <a href="#" className="btn btn-primary">Hire me</a>
                    </div>
            </div>
        </div>
    );
};

export default Service;