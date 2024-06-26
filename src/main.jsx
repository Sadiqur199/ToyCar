import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Component/Main/Main.jsx';
import Login from './Component/Pages/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Registation from './Component/Pages/Registation/Registation.jsx';
import LayOut from './Component/Main/LayOut.jsx';
import Products from './Component/Pages/Products/Products.jsx';
import Blog from './Component/Pages/Blog/Blog.jsx';
import error from '../src/assets/pageerror.webp'
import Alltoys from './Component/Pages/AllToys/Alltoys.jsx';
import AddToy from './Component/Pages/AddToy/AddToy.jsx';
import MyToys from './Component/Pages/MyToys/MyToys.jsx';
import ViewDetails from './Component/Pages/ViewDetails/ViewDetails.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import ProductDetails from './Component/Pages/ProductCard/ProductDetails.jsx';
import MyToysUpdate from './Component/Pages/MyToys/MyToysUpdate.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AboutUs from './Component/Pages/AboutUs/AboutUs.jsx';
AOS.init();

const router = createBrowserRouter([
  {
    path:'*',
    element: <div className='ml-48 mt-24 mb-24'>
      <Link to="/"><button className='btn btn-outline mb-10'>Back to Home</button></Link>
      <img src={error} alt="" />
    </div>
  },  
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:'registation',
        element:<Registation></Registation>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'Alltoys',
        element:<Alltoys></Alltoys>,
        loader:()=>fetch('https://toy-car-server-nine.vercel.app/addToy')
      },
      {
         path:'productDetails/:id',
         element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
         loader:({params})=>fetch(`https://toy-car-server-nine.vercel.app/products/${params.id}`)
      },
      {
        path:'addToy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'myToys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
       path:'updateMyToys/:id',
       element:<MyToysUpdate></MyToysUpdate>,
       loader:({params})=>fetch(`https://toy-car-server-nine.vercel.app/addToy/${params.id}`)
      },
      {
        path:'viewdetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-car-server-nine.vercel.app/addToy/${params.id}`)
      },
      {
        path:'/',
        element:<LayOut></LayOut>
      },
      {
        path:'/About',
        element:<AboutUs></AboutUs>
      }
  

    ],
    
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
