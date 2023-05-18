import React from 'react';

const ProductCard = ({ product }) => {
  const { Name,Picture,Price,CategoryName,Rating } = product
  return (
    <div className="card w-96 bg-slate-100 shadow-xl mt-3">
      <figure className="px-10 pt-10">
        <img src={Picture} alt="Shoes" className="rounded h-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:{Name}</h2>
        <h2>Price:${Price}</h2>
        <h2>Category:{CategoryName}</h2>
        <h2>Rating:{Rating}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;