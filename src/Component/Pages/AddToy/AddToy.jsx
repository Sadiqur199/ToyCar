import { stringify } from 'postcss';
import React from 'react';
import UseTitle from '../../../Hook/useTitle';

const AddToy = () => {
  UseTitle('Thinker Toys Haven|AddToy')
  const addedToy = (event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const seller = form.seller.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const Picture = form.Picture.value;
    const CategoryName = form.CategoryName.value;
    // console.log(name,email,seller,category,price,description,rating,quantity,picture,cname)

    const NewAddToy = {name,email,seller,category,price,description,rating,quantity,Picture,CategoryName}
    console.log(NewAddToy)

    fetch('https://toy-car-server-nine.vercel.app/addToy',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(NewAddToy)
    })

    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        alert('Toy Added SuccessFull')
      }
      console.log(data)
    })

  }

  return (
    <div className='bg-slate-300 pt-10 '>
      <h1 className='text-center font-bold text-3xl pt-5 mb-5'>Add The Your Toy</h1>
      <div className=''>
        <form onSubmit={addedToy}  className=" text-center">

          {/* Toy name & seller email*/}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">Toy Name:</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" placeholder="toy Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">seller email:</span>
              </label>
              <label className="input-group">
                <input type="email" name="email" placeholder="seller email" required className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* seller name and subcategory */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">seller name :</span>
              </label>
              <label className="input-group">
                <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">Sub-category :</span>
              </label>
              <label className="input-group">
                <input type="text" name="category"  placeholder="sub-category" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* Price & description row*/}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">Price:</span>
              </label>
              <label className="input-group">
                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">description:</span>
              </label>
              <label className="input-group">
                <input type="text" name="description" placeholder="Toy description" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* rating and quantity field */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">Rating:</span>
              </label>
              <label className="input-group">
                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">Available quantity:</span>
              </label>
              <label className="input-group">
                <input type="text" name="quantity" placeholder="toy-quantity" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* categoryName and picture */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">CategoryName:</span>
              </label>
              <label className="input-group">
                <input type="text" name="CategoryName" placeholder="Main Category Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-bold">Picture URL::</span>
              </label>
              <label className="input-group">
                <input type="text" name="Picture" placeholder="toy Picture " className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <input type="submit" value="Added-Toy" className="btn btn-block ml-4 mb-5" />
        </form>
      </div>
    </div>
  );
};

export default AddToy;