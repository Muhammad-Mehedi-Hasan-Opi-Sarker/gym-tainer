import React from 'react';
import './About.css';
import opi from '../../images/picture/opi.jpg'
const About = () => {
    return (
        <div className='about container'>
            
            
                <div>
                <img className='w-50' src={opi} alt="" />
                </div>
                <div>
                    <h4 className='text-danger'>My Goal</h4>
                    <p>My goal is to give something to Bangladesh. There is a desire to do more for this country.
                         First I will eradicate poverty from this country inshallah. I will try with other third world countries. 
                        I will sacrifice my life to protect Al-Aqsa Mosque from the Israeli occupation, God willing.</p>
                </div>
            </div>
       
    );
};

export default About;