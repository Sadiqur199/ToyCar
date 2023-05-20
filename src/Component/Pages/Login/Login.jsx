import React, { useContext, useState } from 'react';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGrinBeam } from 'react-icons/fa';
import UseTitle from '../../../Hook/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [Error , setError] = useState('')
  const {singIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  UseTitle('CarToys|Login')




  const handelLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    toast('Your Login SuccessFull !')
    singIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        navigate(from, { replace: true })
        
      })
      .catch(error => {
        setError(error.message)
      })

  }
  return (
    <div className=''>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body p-16 bg-sky-200 ">
              <div className='text-success'>
              </div>
              <h1 className="text-3xl font-bold text-center mb-3">Login</h1>
              <form onSubmit={handelLogin} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Login" />
                </div>
                <div className='text-orange-500'>
                {Error}
                </div>
              </form>
              <p className='my-4 text-center'>New Car Toys?<Link className='text-orange-600 font-bold ml-1' to='/registation'>Sing Up!</Link></p>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;