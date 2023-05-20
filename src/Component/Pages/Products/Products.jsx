import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductCard from '../ProductCard/ProductCard';
import { data } from 'autoprefixer';

// const [tabIndex, setTabIndex] = useState(0);


const Products = () => {
  const [products, setProducts] = useState([])
  const [datas, setDatas] = useState([])

  const handelClick = category => {
    const url = `https://toy-car-server-nine.vercel.app/products?CategoryName=${category}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDatas(data)
      })
  }
  useEffect(() => {
    fetch('https://toy-car-server-nine.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })
  }, [])
  return (
    <div>
      <h2 className='text-center font-bold text-3xl mb-10 mt-10'> Our Product</h2>
      <div className='bg-slate-100 mb-10 p-9'>
        <Tabs>
          <TabList>
            <div className='text-center  bg-slate-100 font-bold text-orange-500'>
              <Tab>All Products</Tab>
              <Tab onClick={() => handelClick('Classic Cars')}>Classic Cars</Tab>
              <Tab onClick={() => handelClick('Sports Cars')}>Sports Cars</Tab>
              <Tab onClick={() => handelClick('Emergency Vehicle')}>Emergency Vehicle</Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
              {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
              }
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
              {
                datas.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
              {
                datas.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
              {
                datas.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>

    </div>
  );
};

export default Products;