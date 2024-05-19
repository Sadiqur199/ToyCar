import React from 'react';
import Header from '../SharedPage/Header/Header';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Footer from '../SharedPage/Footer/Footer';
import Banner from '../Pages/Banner/Banner';
import Products from '../Pages/Products/Products';
import Gallery from '../Pages/Gallery/Gallery';
import Client from '../Pages/Client/Client';
import Delevery from '../Pages/Delevery/Delevery';
import ToyBuildingTips from '../ToyBuildingTips/ToyBuildingTips';

const LayOut = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Products></Products>
      <ToyBuildingTips></ToyBuildingTips>
      <Delevery></Delevery>
      <Client></Client>
    </div>
  );
};

export default LayOut;