import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ allToy }) => {
  console.log(allToy)
  const { _id,name, price, seller, category, quantity } = allToy
  // const [view , setView]  = useState(null)

  const handelView = (event)=>{
    // setView(event)

  }
  // console.log(view)

  return (
    <>

      <tr>
        <td>{seller && seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/viewdetails/${_id}`}><button htmlFor="my-modal" onClick={()=>handelView(allToy)} className="btn">View Details</button></Link>

          {/* The button to open modal */}


          {/* Put this part before </body> tag
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <img src='' alt="" />
              <h3 className="font-bold text-lg"></h3>
              <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Yay!</label>
              </div>
            </div>
          </div> */}
        </th>
      </tr>
    </>
  );
};

export default AllToysTable;