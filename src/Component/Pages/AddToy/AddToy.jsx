import React from 'react';

const AddToy = () => {
  return (
    <div>
      <h1>this is add toy</h1>
      <div>
        <form  className=" text-center">

          {/* name & quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Toy Name:</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">seller email:</span>
              </label>
              <label className="input-group">
                <input type="email" name="email" placeholder="Available Quantity" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* supplier & taste row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">seller name :</span>
              </label>
              <label className="input-group">
                <input type="text" name="seller" placeholder="Supplier Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Sub-category :</span>
              </label>
              <label className="input-group">
                <input type="text" name="category" placeholder="Coffee Test" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* Category & Details row*/}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price:</span>
              </label>
              <label className="input-group">
                <input type="text" name="price" placeholder="Category Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details:</span>
              </label>
              <label className="input-group">
                <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* rating and quantity field */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating:</span>
              </label>
              <label className="input-group">
                <input type="text" name="rating" placeholder="Category Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available quantity:</span>
              </label>
              <label className="input-group">
                <input type="text" name="quantity" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* description and picture */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">CategoryName:</span>
              </label>
              <label className="input-group">
                <input type="text" name="cname" placeholder="Category Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Picture URL::</span>
              </label>
              <label className="input-group">
                <input type="text" name="picture" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          <input type="submit" value="Add Toy" className="btn btn-block ml-4" />
        </form>
      </div>
    </div>
  );
};

export default AddToy;