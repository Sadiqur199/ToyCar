import React from 'react';
import { Link } from 'react-router-dom';

const MyToyDetail = ({myToy,handelAddedToyDelete}) => {
  const{_id,name,details,picture,quantity,price} = myToy

   return (
    <tr>
    <th>
     <button onClick={()=>handelAddedToyDelete(_id)} className='btn btn-outline'>Delete</button>
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
    <td>{price}</td>
    <td>{quantity}</td>
    <td>{details}</td>
    <th>
      <Link to={`/updateMyToys/${_id}`}><button className="btn btn-outline">Update</button></Link>
    </th>
  </tr>
  );
};

export default MyToyDetail;