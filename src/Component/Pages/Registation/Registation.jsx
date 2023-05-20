import React, { useContext, useState } from 'react';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGrinBeam } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseTitle from '../../../Hook/useTitle';

const Registation = () => {
  const {createUser} = useContext(AuthContext)
  const [Error , setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  UseTitle('CarToys|Registation')


  const handelSingUp = (event) =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    toast('Your Registation SuccessFull !')
    createUser(email,password)
    .then(result=>{
      const user = result.user
      console.log(user)
      navigate(from, { replace: true })
      updateCurrentUser(user,name,photo)
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  const updateCurrentUser =(user, name, photo)=>{
    updateProfile(user, {
        displayName: name,
        photoURL: photo
    })
    .then()
    .catch(error=>{
        console.log(error);
    })
}

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body p-16 bg-sky-200">
            <h1 className="text-3xl font-bold text-center mb-3">SingUp</h1>
            <form onSubmit={handelSingUp} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" name='photo' placeholder="Photo" className="input input-bordered" />
              </div>
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
              </div>
              {Error}
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SingUp" />
              </div>
            </form>
            <p className='my-4 text-center'>Have an account? <Link className='text-orange-600 font-bold ml-1' to='/login'>Login</Link></p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;