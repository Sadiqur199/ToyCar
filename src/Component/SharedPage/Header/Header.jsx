import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import carLogo from '../../../assets/carlogo.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  // const handelLogout = () =>{
  //   logOut()
  //   .then()
  //   .catch(error=>console.log(error.message))
  // }
  const handelLogout = () => {
      logOut()
      .then()
      .catch(error=>console.log(error.message))
  }

  const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/Alltoys'>All Toys</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {user?.email ?
      <>
        <li><Link to='/services'>My Toys</Link></li>
        <li><Link to='/services'> Add A Toy</Link></li>
        <li> <button onClick={handelLogout}>Log out</button> </li>
      </>
      :
      <li><Link to='/login'>Login</Link></li>

    }
  </>
  return (
    <div>
      <div className="navbar bg-slate-300 h-20 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to='/' className=" normal-case text-xl">
            <img className='w-24 h-24' src={carLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <img className='mt-2 me-2 rounded' style={{ height: "35px", width: '35px' }} title={user?.displayName} src={user?.photoURL ? user.photoURL : ''} alt="" />
          :
          <Link href="#deets" className='mt-1'>
            <FaUserCircle style={{ fontSize: '2rem' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;