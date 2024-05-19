import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [datas, setDatas] = useState([]);
  const [visibleProductsCount, setVisibleProductsCount] = useState(4);
  const [showAll, setShowAll] = useState(false);

  const handleClick = (category) => {
    const url = `https://toy-car-server-nine.vercel.app/products?CategoryName=${category}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDatas(data);
      });
  };

  useEffect(() => {
    fetch('https://toy-car-server-nine.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProducts(data);
      });
  }, []);

  const showMoreProducts = () => {
    setVisibleProductsCount(products.length);
    setShowAll(true);
  };

  const showLessProducts = () => {
    setVisibleProductsCount(4);
    setShowAll(false);
  };

  return (
    <div>
      <h2 className='text-center font-bold text-3xl mb-10 mt-10'>Our Product</h2>
      <div className='bg-slate-100 mb-10 p-9'>
        <Tabs >
          <TabList>
            <div className='text-center bg-slate-100 font-bold text-[#74BEF6]'>
              <Tab>All Products</Tab>
              <Tab onClick={() => handleClick('Teddy Bare')}>Classic Toy</Tab>
              <Tab onClick={() => handleClick('Classic Cars')}>Classic Cars</Tab>
              <Tab onClick={() => handleClick('Sports Cars')}>Sports Cars</Tab>
              <Tab onClick={() => handleClick('Emergency Vehicle')}>Emergency Vehicles</Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {
                products.slice(0, visibleProductsCount).map(product => (
                  <ProductCard key={product._id} product={product}></ProductCard>
                ))
              }
            </div>
            <div className='text-center mt-6'>
              {!showAll && visibleProductsCount < products.length && (
                <button
                  className='btn btn-primary text-white px-4 py-2 rounded'
                  onClick={showMoreProducts}
                >
                  See More
                </button>
              )}
              {showAll && (
                <button
                  className='btn btn-primary text-white px-4 py-2 rounded'
                  onClick={showLessProducts}
                >
                  See Less
                </button>
              )}
            </div>
          </TabPanel>

          {['Classic Toy', 'Classic Cars', 'Sports Cars','Emergency Vehicle'].map((category, index) => (
            <TabPanel key={index}>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                  datas.map(product => (
                    <ProductCard key={product._id} product={product}></ProductCard>
                  ))
                }
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
