import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
  const viewToy = useLoaderData()
  const { name, email, seller, category, price, details, rating, quantity, picture, cname } = viewToy
  console.log(viewToy)
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
             <button>Delete</button>
            </th>
            <th>Image</th>
            <th>ToyName</th>
            <th>Email</th>
            <th>Seller</th>
            <th>category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>update</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
            <button className="btn btn-outline">Delete</button>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={picture} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{seller}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <th>
              <button className="btn btn-outline">Update</button>
            </th>
          </tr>
        </tbody>
 

      </table>
    </div>
  );
};

export default ViewDetails;