import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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
      const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);
      let errorElement;
      if (error) {
        errorElement= <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }
      if(user){
        navigate(from, { replace: true });
    }
    const handleLogin =event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password =passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
    const resetPassword=async ()=>{
        const email =emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
          toast('Sent email');
        }else{
            toast('Plaese enter email address')
        }
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
                <p>Forget Password<button className='pe-auto btn btn-link text-primary' onClick={resetPassword}>Password Reset</button></p>
                <input style={{backgroundColor:'rgba(243, 111, 33, 0.86)'}} className='btn' type="submit" value="submit" />
                {errorElement}
            </form>
            <ToastContainer />
            <Social></Social>
        </div>
    );
};

export default Login;