import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyToysUpdate = () => {
  const myToyUpdated = useLoaderData()
  const {name,price,quantity,details} = myToyUpdated;
  const handelUpdateToy =(event)=>{
   event.preventDefault()
   const form = event.target
   const name = form.name.value
   const price = form.price.value
   const quantity = form.quantity.value
   const details = form.details.value
   
   const updatedMyToys = {name,price,quantity,details}
  //  fetch(`http://localhost:5000/addToy`,{

  //  })
  //  .then
  }
  return (
    <div>
      <h1>Update Data:{name}</h1>

      <div className='mb-16 mt-10 ml-52 mr-48'>
        <form onSubmit={handelUpdateToy}>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">ToysName:</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">ToysPrice:</span>
            </label>
            <label className="input-group">
              <input type="text" name="price" defaultValue={price} placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">ToysQuantity:</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" defaultValue={quantity} placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">ToysDetails:</span>
            </label>
            <label className="input-group">
              <input type="text" name="details" defaultValue={details} placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>
          <input type="submit" value="Updated Toy" className="btn pl-20 pr-20  mt-5 ml-4"/>
        </form>
      </div>
    </div>
  );
};

export default MyToysUpdate;