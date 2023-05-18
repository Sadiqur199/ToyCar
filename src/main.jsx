import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
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

const router = createBrowserRouter([
  {
    path:'*',
    element: <div className='ml-48 mt-24 mb-24'><img src={error} alt="" /></div>
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
        element:<Alltoys></Alltoys>
      },
      {
        path:'/',
        element:<LayOut></LayOut>
      },
  

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
