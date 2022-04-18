import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    const emailRef =useRef('');
    const passwordRef = useRef('');
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user){
        navigate(from, { replace: true });
    }
    const handleLogin =event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password =passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
   
    return (
        <div className='login'>
            <h1 style={{color:'rgba(243, 111, 33, 0.86)'}}>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input ref={emailRef} type="email" name="email" id="" placeholder='Enter you email' required /><br />
                <label htmlFor="password">Password:</label>
                <input ref={passwordRef} type="password" name="password" id="" required placeholder='Password' /><br />
                <p>No have a account <small><Link className='text-decoration-none' to={'/register'} >Please Register</Link></small></p>
                <input style={{backgroundColor:'rgba(243, 111, 33, 0.86)'}} className='btn' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;