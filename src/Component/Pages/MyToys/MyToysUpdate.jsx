import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysUpdate = () => {
  const myToyUpdated = useLoaderData()
  const {_id,name,price,quantity,details} = myToyUpdated;
  const handelUpdateToy =(event)=>{
   event.preventDefault()
   const form = event.target
   const name = form.name.value
   const price = form.price.value
   const quantity = form.quantity.value
   const details = form.details.value
   
   const updatedMyToys = {name,price,quantity,details}
   fetch(`https://toy-car-server-nine.vercel.app/addToy/${_id}`,{
    method:'PUT',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(updatedMyToys)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    if(data.modifiedCount>0){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Toy Update SuccesFUll',
        showConfirmButton: false,
        timer: 1500
      })
    }
   })
  }
  return (
    <div>
      <div className='mb-16 mt-10 ml-52 mr-48'>
        <form onSubmit={handelUpdateToy}>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">ToysName:</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" defaultValue={name} placeholder="" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">ToysPrice:</span>
            </label>
            <label className="input-group">
              <input type="text" name="price" defaultValue={price} placeholder="" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">ToysQuantity:</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" defaultValue={quantity} placeholder="" className="input input-bordered w-full" />
            </label>
          </div>
        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">ToysDetails:</span>
            </label>
            <label className="input-group">
              <input type="text" name="details" defaultValue={details} placeholder="" className="input input-bordered w-full" />
            </label>
          </div>
          <input type="submit" value="Updated Toy" className="btn pl-20 pr-20  mt-5 ml-4"/>
        </form>
        <Link to='/myToys'><button className='btn btn-outline  mt-10 pl-16 pr-16'>Go back to Your Toy</button></Link>
      </div>
    </div>
  );
};

export default MyToysUpdate;