import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {
  const {user} = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])
 
  const url = `http://localhost:5000/addToy?email=${user.email}`
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  },[])
  return (
    <div>
{/* 
      <div className="overflow-x-auto">
            <h1 className='text-3xl text-center font-semibold'>All Toys</h1>
            <div className='flex my-6 justify-center'>
                <input type="text" className='p-1 mr-2 border-2 rounded-lg pl-4' placeholder='Search' />
                <button onClick={handleSearch} className='btn btn-outline btn-error'>Search</button>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Seller</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((data, index) => (

                        <tr>
                            <th>{index + 1}</th>
                            <td>{data.Name}</td>
                            <td>{data.SellerName}</td>
                            <td>{data.SubCategoryName}</td>
                            <td>{data.Price}</td>
                            <td>{data.quantity}</td>
                            <td><Link to={`/details/${data._id}`}><button  className='btn btn-outline btn-error'>View Details</button></Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div> */}

    </div>
  );
};

export default MyToys;