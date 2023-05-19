import React from 'react';
import { Link } from 'react-router-dom';



const ProductCard = ({ product }) => {
  const { _id,Name, Picture, Price, CategoryName, Rating } = product
  return (
    <div className="card w-96 bg-slate-100 shadow-xl mt-3">
      <figure className="px-10 pt-10">
        <img src={Picture} alt="Shoes" className="rounded h-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:{Name}</h2>
        <h2>Price:${Price}</h2>
        <h2>Category:{CategoryName}</h2>
        <h2>Rating:
          {Rating}
        </h2>
        <div className="card-actions">
          <Link to={`/productDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;