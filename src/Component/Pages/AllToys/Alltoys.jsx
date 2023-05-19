import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const Alltoys = () => {
  const allToys = useLoaderData()

  return (
    <div className="overflow-x-auto w-full">
    <table className="table w-full">
        <thead>
            <tr>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>View Button</th>
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

  );
};

export default Alltoys;