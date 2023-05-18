import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductCard from '../ProductCard/ProductCard';
import { data } from 'autoprefixer';

// const [tabIndex, setTabIndex] = useState(0);


const Products = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
       setProducts(data)
    })
  },[])
  return (
    <div>
      <h2 className='text-center font-bold text-3xl mb-10 mt-10'> Our Product</h2>
     <div className='bg-slate-100 mb-10 p-9'>
     <Tabs>
    <TabList>
      <div className='text-center  bg-slate-100 font-bold text-orange-500'>
      <Tab>All Products</Tab>
      <Tab>Classic Cars</Tab>
      <Tab>Sports Cars</Tab>
      <Tab>Emergency Vehicle</Tab>
      </div>
    </TabList>

    <TabPanel>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        {
          products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
        }
      </div>
    </TabPanel>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
     </div>

    </div>
  );
};

export default Products;