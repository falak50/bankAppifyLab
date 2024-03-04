// import {
//     createBrowserRouter,
//   } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Navber from "../components/Navber";
import Main from "../Pages/Main";
import AddUser from "../components/AddUser";
import Transaction from "../Pages/Transaction";


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
            path:'/addUser',
            element:<AddUser></AddUser>
        },
        {
            path: `/transaction/:id`,
            element:<Transaction></Transaction>
        },
        {
            path:'/history',
            element:<Home></Home>
        },
       
      ]
    },
  ]);

