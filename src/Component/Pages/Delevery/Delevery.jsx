import React from 'react';
import img1 from '../../../assets/paperfly.png'
import img2 from '../../../assets/phatao.png'
import img4 from '../../../assets/sundarban.jpg'
const Delevery = () => {
  return (
    <div>
      <div>
        <h1>Our Delivery System</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border mb-16 ml-16'>

        <div className="hero  h-[150px]  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={img1} className="max-w-sm rounded w-1/3 h-1/3 shadow-2xl" />
            <div>
              <h1 className="font-bold">Box Office News!</h1>
            </div>
          </div>
        </div>

        <div className="hero  h-[150px] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={img2} className="max-w-sm rounded w-1/3 h-1/3 shadow-2xl" />
            <div>
              <h1 className="font-bold">Box Office News!</h1>
            </div>
          </div>
        </div>

        <div className="hero  h-[150px] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={img4} className="max-w-sm rounded w-1/3 h-1/3 shadow-2xl" />
            <div>
              <h1 className="font-bold">Box Office News!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delevery;