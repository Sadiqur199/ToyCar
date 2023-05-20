import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
  const viewToy = useLoaderData()
  const { name, email, seller, category, price, rating, quantity, picture, details } = viewToy
  console.log(viewToy)
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={picture} className="h-96 w-96 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">ToyName:{name}</h1>
          <h1 className="mt-2">SellerEmail:{email}</h1>
          <h1 className="mt-2">SellerName:{seller}</h1>
          <h1 className="mt-2">Category:{category}</h1>
          <h1 className="mt-2">Price:${price}</h1>
          <h1 className="mt-2">Rating:{rating}</h1>
          <h1 className="mt-2">Quantity:{quantity}</h1>
          <p className="py-6">{details}</p>
          <Link to="/"><button className="btn btn-primary">Back To Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;