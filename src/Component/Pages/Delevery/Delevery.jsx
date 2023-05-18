import React from 'react';
import img1 from '../../../assets/paperfly.png'
import img2 from '../../../assets/streetFast.png'
import img4 from '../../../assets/sundarban.jpg'
const Delevery = () => {
  return (
    <div>
      <div className='mt-24 mb-16 text-center'>
        <h1 className='font-bold text-3xl'>Our Delivery System</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border mb-16'>

        <div className="hero  md:h-[180px] m-2  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={img1} className="max-w-sm rounded w-1/3 h-1/3 shadow-2xl" />
            <div>
              <h1 className="font-bold">PaperFly!</h1>
              <button className='btn btn-outline mt-2'>Confirm</button>
            </div>
          </div>
        </div>

        <div className="hero  md:h-[180px] m-2 rounded  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={img2} className="max-w-sm rounded w-1/3 h-1/3 shadow-2xl" />
            <div>
              <h1 className="font-bold">StreetFast</h1>
              <button className='btn btn-outline mt-2'>Confirm</button>
            </div>
          </div>
        </div>

        <div className="hero  md:h-[180px] mt-2 mb-2 rounded bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={img4} className="max-w-sm rounded w-1/3 h-1/3 shadow-2xl" />
            <div>
              <h1 className="font-bold">Sundarban</h1>
              <button className='btn btn-outline mt-2'>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delevery;