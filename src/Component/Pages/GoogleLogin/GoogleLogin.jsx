import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GoogleLogin = () => {

  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'


  const handelGoogleSignIn = () => {
    toast('Your GoogleLogin SuccessFull !')
    googleSignIn()
      .then(result => {
        const user = result.user
        navigate(from,{replace:true})
      })
      .catch(error => console.log(error.message))
  }


  return (
    <div>
      <div className="divider">OR</div>
      <div className='text-center'>
        <button onClick={handelGoogleSignIn} className="btn btn-circle bg-warning">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;