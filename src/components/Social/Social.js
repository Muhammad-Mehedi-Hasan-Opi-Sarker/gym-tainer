import React from 'react';
import './Social.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import icon from '../../images/icon/google.png'
import Loading from '../Loading/Loading';
const Social = () => {
    const navigate=useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(loading){
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement= <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }
      if (user) {
        navigate('/home')
      }
    return (
        <div>
            <div className='d-flex align-items-center '>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
            <div className='p-2'>or</div>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
        </div>
        {errorElement}
        <div className="right-items">
        <button onClick={()=>signInWithGoogle()} className='btn btn-primary'><small>
            <img  src={icon} alt="" />
             Google Sing In</small></button>
        </div>
        </div>
    );
};

export default Social;