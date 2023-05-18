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

const router = createBrowserRouter([  
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
