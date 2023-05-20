import React from 'react';
import Header from '../SharedPage/Header/Header';
import Footer from '../SharedPage/Footer/Footer';
import Banner from '../Pages/Banner/Banner';
import Products from '../Pages/Products/Products';
import Client from '../Pages/Client/Client';
import Gallery from '../Pages/Gallery/Gallery';
import Delevery from '../Pages/Delevery/Delevery';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Main;