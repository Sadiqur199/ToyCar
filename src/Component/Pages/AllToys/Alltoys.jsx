import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Provider/AuthProvider';

const Alltoys = () => {
  const allToys = useLoaderData();
  const { user } = useContext(AuthContext);

  const [search, setSearch] = useState('');
  const [displayedToys, setDisplayedToys] = useState(allToys);

  useEffect(() => {
    const filteredToys = allToys.filter(toy =>
      toy.name.toLowerCase().includes(search.toLowerCase()) || toy.price.toString().includes(search)
    );
    setDisplayedToys(filteredToys);
  }, [search, allToys]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  if (!user) {
    toast('Please Login This Site');
  }

  return (
    <>
      <div className='pl-10'>
        <label className='font-bold text-xl mr-2'>Search:</label>
        <input
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Search your toy"
          className="input input-bordered mb-10 mt-10 mr-24 w-1/2"
        />
      </div>
      <div className="overflow-x-auto w-full p-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th className='bg-[#74C4F7]'>Seller Name</th>
              <th className='bg-[#74C4F7]'>Toy Name</th>
              <th className='bg-[#74C4F7]'>Sub-category</th>
              <th className='bg-[#74C4F7]'>Price</th>
              <th className='bg-[#74C4F7]'>Available Quantity</th>
              <th className='bg-[#74C4F7]'>View Button</th>
            </tr>
          </thead>
          <tbody>
            {displayedToys.map(allToy => (
              <AllToysTable key={allToy._id} allToy={allToy} />
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
};

export default Alltoys;
