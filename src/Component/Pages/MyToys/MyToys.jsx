import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToyDetail from './MyToyDetail';
import UseTitle from '../../../Hook/useTitle';

const MyToys = () => {
  const {user} = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])
  UseTitle('CarToys|MyToy')
 
  const url = `https://toy-car-server-nine.vercel.app/addToy?email=${user?.email}`
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setMyToys(data)
    })
  },[]);


  const handelAddedToyDelete = (id) =>{
    const proceed =  confirm('Are You Sure!')  
    if(proceed){
     fetch(`https://toy-car-server-nine.vercel.app/addToy/${id}`,{
     method:'DELETE'
     })
     .then(res=>res.json())
     .then(data=>{
       if(data.deletedCount>0){
        const clearData = myToys.filter(myToy=>myToy._id !==id)
        setMyToys(clearData)
       }
     })
    } 
   }

  return (
    <div>
      <h1 className='text-center mt-10 mb-10 font-bold text-3xl'>User Added Toy:{myToys.length}</h1>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          Delete
        </th>
        <th>Image</th>
        <th>ToyName</th>
        <th>price</th>
        <th>quantity</th>
        <th>Details</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
  
        {
          myToys.map(myToy=><MyToyDetail
             key={myToy._id} 
             myToy={myToy}
             handelAddedToyDelete={handelAddedToyDelete}
          ></MyToyDetail>)
            
          
        }

    </tbody>

    
  </table>
</div>

    </div>
  );
};

export default MyToys;