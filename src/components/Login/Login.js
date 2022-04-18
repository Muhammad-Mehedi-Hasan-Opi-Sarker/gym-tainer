import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    const handleLogin =event=>{
        event.preventDefault();
        // console.log(event.target.email.value)
    }
    return (
        <div className='login'>
            <h1 style={{color:'rgba(243, 111, 33, 0.86)'}}>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" placeholder='Enter you email' required /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="" required placeholder='Password' /><br />
                <p>No have a account <small><Link className='text-decoration-none' to={'/register'} >Please Register</Link></small></p>
                <input style={{backgroundColor:'rgba(243, 111, 33, 0.86)'}} className='btn' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;