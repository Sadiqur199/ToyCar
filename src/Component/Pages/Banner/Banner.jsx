import React from 'react';
import img1 from '../../../assets/banner.jpg'



const Banner = () => {
  return (
    <div className='mb-9'>
      <div className="carousel">
        <div id="item1" className="carousel-item w-full">
          <img src={img1} className="w-full h-[610px]" />
          <div className="absolute rounded-xl flex items-center  left-0 bottom-14  top-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-16 w-1/2'>
              <h2 className='text-6xl font-semibold'>Rev Up the Fun with Car Toys!</h2>
              <p>Explore a world of excitement and imagination with our wide range of car toys! From sleek race cars to rugged off-road vehicles, we have the perfect toys to ignite your child's passion for adventure.</p>
              <div>
                <button class="btn btn-active btn-warning mr-5">Read More...</button>
                <button class="btn btn-outline btn-warning">Our Products</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;