import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const productDetails = useLoaderData()
  const{Name,Picture,SellerName,Price,Rating,SubCategoryName,CategoryName,sellerMail,quantity,description} = productDetails
  // console.log(productDetails)
  return (
    <div>
      <p className='text-center font-bold text-3xl mt-10 mb-10'>ProductDetails</p>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Picture} className="h-96 w-96 rounded-lg shadow-2xl" />
          <div className='ml-16'>
            <h1 className="text-5xl font-bold">ToysName:{Name}</h1>
            <h1 className="mt-2">SellerName:{SellerName}</h1>
            <h1 className="mt-2">Price:{Price}</h1>
            <h1 className="mt-2">Rating:{Rating}</h1>
            <h1 className="mt-2">SubCategoryName:{SubCategoryName}</h1>
            <h1 className="mt-2">CategoryName:{CategoryName}</h1>
            <h1 className="mt-2">SellerMail:{sellerMail}</h1>
            <h1 className="mt-2">Quantity:{quantity}</h1>
            <p className="py-6">{description}</p>
            <Link to='/'><button className='btn btn-outline'>Back To Home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;