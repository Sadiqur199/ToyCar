import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../../Hook/useTitle';

const AllToysTable = ({ allToy }) => {
  const { _id,name, price, seller, category, quantity } = allToy

  UseTitle('CarToys|AllToys')
  

  return (
    <>

      <tr>
        <td>{seller && seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/viewdetails/${_id}`}><button htmlFor="my-modal"  className="btn">View Details</button></Link>
        </th>
      </tr>
    </>
  );
};

export default AllToysTable;