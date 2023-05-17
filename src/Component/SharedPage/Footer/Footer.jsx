import React from 'react';
import carLogo from '../../../assets/carlogo.png'
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-base-200'>
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
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">Email:sadiq@gmail.com</a>
          <a className="link link-hover">Phone:12345646</a>
          <a className="link link-hover">Tel:5679512</a>
          <a className="link link-hover">Address: Mirpur-2</a>
        </div>
        <div>
          <span className="footer-title">Social Link</span>
          <a className="link link-hover "><FaFacebook></FaFacebook></a>
          <a className="link link-hover"><FaWhatsappSquare></FaWhatsappSquare></a>
          <a className="link link-hover"><FaInstagramSquare></FaInstagramSquare></a>
        </div>
      </footer>
      <div className='mt-4 text-center'>
      <h1>Copy Right @ 2023 : Sadiqur Rahman ;</h1>
      </div>
    </div>
  );
};

export default Footer;