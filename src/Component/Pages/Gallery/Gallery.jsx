import React from 'react';
import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpeg'
import img3 from '../../../assets/6.png'
import img4 from '../../../assets/4.jpg'
import img5 from '../../../assets/5.avif'
import img6 from '../../../assets/abstract-wallpaper_915071-17132.avif'
import img7 from '../../../assets/7.avif'
import img8 from '../../../assets/8.jpg'
import img9 from '../../../assets/9.jpg'
import img10 from '../../../assets/10.jpg'
import img11 from '../../../assets/11.jpg'
import img12 from '../../../assets/12.jpg'
const Gallery = () => {
  return (
    <div>
      <div className='mb-9'>
        <h1 className='mt-5 text-center  text-3xl font-bold '>Our Toy Shop Gallery</h1>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bottom-0  ml-5 mr-5 gap-6'>
      <div className='relative group '>
      <img className=' rounded h-[200px] w-full transition-opacity duration-300 group-hover:opacity-50' src={img1}/>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
        <h4 className='text-white text-lg'>Car</h4>
      </div>


      </div>
      <img className='h-[200px] w-full' src={img2}/>
      <img className='h-[200px] w-full' src={img3}/>
      <img className='h-[200px] w-full' src={img4}/>
      <img className='h-[200px] w-full' src={img6}/>
      <img className='h-[200px] w-full' src={img7}/>
      <img className='h-[200px] w-full' src={img8}/>
      <img className='h-[200px] w-full' src={img9}/>
      <img className='h-[200px] w-full' src={img5}/>
      <img className='h-[200px] w-full' src={img10}/>
      <img className='h-[200px] w-full' src={img12}/>
      <img className='h-[200px] w-full' src={img11}/>
    </div>
    </div>
  );
};

export default Gallery;