// import {
//     createBrowserRouter,
//   } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Navber from "../components/Navber";
import Main from "../Pages/Main";
import AddUser from "../components/AddUser";


 export const  router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/AddUser',
            element:<AddUser></AddUser>
        },
        {
            path:'/history',
            element:<Home></Home>
        },
       
      ]
    },
  ]);