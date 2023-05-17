import React from 'react';
import img1 from '../../../assets/m3.jpg'
import img2 from '../../../assets/m-1.jpg'
import img3 from '../../../assets/m-2.jpg'
const Client = () => {
  return (
    <div>
      <div className='mt-24 mb-16 text-center'>
        <h1 className='font-bold text-3xl'>Our Member</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ml-16'>
        <div className="card w-96 bg-slate-300 shadow-xl">
          <figure className="px-10 pt-0">
            <img src={img1} alt="Shoes" className="rounded-full h-1/2" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mr:Libande Khan</h2>
            <p>Web developers work closely with clients or stakeholders to understand their needs and requirements for the website. They gather information about the website's purpose, target audience, and desired features and functionality. </p>
            <p className='font-bold'>Status:Web Developer</p>
            <p className='font-bold'>Contact:libanon@gmail.com</p>
            <div className="card-actions">
              <button className="btn btn-primary">Visit Info</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-slate-300 shadow-xl">
          <figure className="px-5 pt-0">
            <img src={img2} alt="Shoes" className="rounded-full h-1/2" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mr:Jilabas khan</h2>
            <p>Web developers work closely with clients or stakeholders to understand their needs and requirements for the website. They gather information about the website's purpose, target audience, and desired features and functionality. </p>
            <p className='font-bold'>Status:Graphics Designer</p>
            <p className='font-bold'>Contact:jilibs@gmail.com</p>
            <div className="card-actions">
              <button className="btn btn-primary">Visit Info</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-slate-300 shadow-xl">
          <figure className="px-5 pt-0">
            <img src={img3} alt="Shoes" className="rounded-full h-1/2" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mr: Amdali khan</h2>
            <p>Web developers work closely with clients or stakeholders to understand their needs and requirements for the website. They gather information about the website's purpose, target audience, and desired features and functionality. </p>
            <p className='font-bold'>Status:MERN Developer</p>
            <p className='font-bold'>Contact:amdali@gmail.com</p>
            <div className="card-actions">
              <button className="btn btn-primary">Visit Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;