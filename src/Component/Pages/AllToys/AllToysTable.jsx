import React from 'react';

const AllToysTable = ({allToy}) => {
  console.log(allToy)
  const {name,price,seller,category,quantity} = allToy
  return (
    <tr>
    <td>{seller&&seller}</td>
    <td>{name}</td>
    <td>{category}</td>
    <td>${price}</td>
    <td>{quantity}</td>
    <th>
        {
            status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">View Details</button>}
    </th>
</tr>
  );
};

export default AllToysTable;