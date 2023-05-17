import React from 'react';
import carLogo from '../../../assets/carlogo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <Link to='/' className=" normal-case text-xl">
            <img className='w-24 h-24' src={carLogo} alt="" />
          </Link>
          <p>Car Toys Shop.<br />Providing reliable tech since 2023</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Car toy detailing</a>
          <a className="link link-hover">Car toy painting</a>
          <a className="link link-hover">Car toy customization</a>
          <a className="link link-hover">Car toy repairs</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;