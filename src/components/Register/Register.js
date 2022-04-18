import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div className='register'>
            <h1 style={{color:'rgba(243, 111, 33, 0.86)'}}>Please Register</h1>
            <form>
                <label htmlFor="text">Name:</label>
                <input type="text" placeholder='Your Name' required/><br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" placeholder='Enter you email' required /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="" required placeholder='Password' /><br />
                <p>Already have account <small><Link className='text-decoration-none' to={'/login'} >Login</Link></small></p>
                <input style={{backgroundColor:'rgba(243, 111, 33, 0.86)'}} className='btn' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Register;