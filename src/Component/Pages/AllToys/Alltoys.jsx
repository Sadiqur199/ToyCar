import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Provider/AuthProvider';

const Alltoys = () => {
  const allToys = useLoaderData()
  const {user} = useContext(AuthContext)

  const [Search , setSearch]  = useState('')
//search button
  const handelChange = (event)=>{
    event.preventDefault();
    setSearch(event.target.value)
    setToys(Search);
    setDisplayedToys(Search.slice(0, 20))
  }
  console.log(Search)

  const SearchToy = allToys.filter(ToySearch=>{
    console.log(ToySearch.name)
    ToySearch.name.includes(Search)

  })

  if(!user){
    toast('Please Login This Site')
  }



  return (
    <>
      <div>
      <input type="text" onChange={handelChange}  value={Search}  placeholder="Search your toy" className="input input-bordered mb-10 mt-10 mr-24 w-1/2" />
      </div>
      <div className="overflow-x-auto w-full p-10">
        <table className="table w-full ">
          <thead>
            <tr >
              <th className='bg-[#74C4F7]'>Seller Name</th>
              <th className='bg-[#74C4F7]'>Toy Name</th>
              <th className='bg-[#74C4F7]'>Sub-category</th>
              <th className='bg-[#74C4F7]'>Price</th>
              <th className='bg-[#74C4F7]'>Available Quantity</th>
              <th className='bg-[#74C4F7]'>View Button</th>
            </tr>
          </thead>
          <tbody>
            {
              allToys.map(allToy => <AllToysTable
                key={allToy._id}
                allToy={allToy}
              ></AllToysTable>)
            }
          </tbody>

        </table>
      </div>
    </>

  );
};

export default Alltoys;