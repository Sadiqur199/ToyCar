import React from 'react';
import Header from '../SharedPage/Header/Header';
import Footer from '../SharedPage/Footer/Footer';
import Banner from '../Pages/Banner/Banner';
import Products from '../Pages/Products/Products';
import Client from '../Pages/Client/Client';
import Gallery from '../Pages/Gallery/Gallery';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Gallery></Gallery>
      <Client></Client>
      <Footer></Footer>
    </div>
  );
};

export default Main;