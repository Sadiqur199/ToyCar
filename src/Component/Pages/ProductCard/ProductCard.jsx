import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({ product }) => {
  const { _id,Name, Picture, Price, CategoryName, Rating } = product
  const {user} = useContext(AuthContext)
  return (
    <div className="card w-74 gap-5 bg-slate-100 shadow-xl mt-3" data-aos="fade-up">
      <figure className="px-8 pt-8">
        <img src={Picture} alt="" className="rounded h-[140px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:{Name}</h2>
        <h2>Price:${Price}</h2>
        <h2>Category:{CategoryName}</h2>
        <h2>Rating:
          {Rating}
        </h2>
        <div className="card-actions">
          <Link to={`/productDetails/${_id}`}><button className="btn text-black bg-[#74C4F7] border-none hover:bg-[#74C4F7]">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;