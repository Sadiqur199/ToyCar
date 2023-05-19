import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {
  const {user} = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])
 
  const url = `http://localhost:5000/addToy?email=${user?.email}`
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setMyToys(data)
    })
  },[])
  return (
    <div>
      <h1>Added toy length:{myToys.length}</h1>

      <div className="overflow-x-auto">
            <h1 className='text-3xl text-center font-semibold'>All Toys</h1>
            <div className='flex my-6 justify-center'>
                <input type="text" className='p-1 mr-2 border-2 rounded-lg pl-4' placeholder='Search' />
                <button  className='btn btn-outline btn-error'>Search</button>
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
                  

                </tbody>
            </table>
        </div>

    </div>
  );
};

export default MyToys;