import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const handleRegister=event=>{
        event.preventDefault();
        const email =event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email,password);
    }
    if (user) {
        navigate('/home')
      }
    return (
        <div className='register'>
            <h1 style={{color:'rgba(243, 111, 33, 0.86)'}}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="text">Name:</label>
                <input type="text" placeholder='Your Name' required/><br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" placeholder='Enter you email' required /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="" required placeholder='Password' /><br />
                <p>Already have account <small><Link className='text-decoration-none' to={'/login'} >Login</Link></small></p>
                <input style={{backgroundColor:'rgba(243, 111, 33, 0.86)'}} className='btn' type="submit" value="submit" />
            </form>
            <Social></Social>
        </div>
    );
};

export default Register;