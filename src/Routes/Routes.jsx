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
import UserDetails from "../components/UserDetails";
import TransactionHistory from "../Pages/TransactionHistory";
import DepositForm from "../components/DepositForm";
import WithdrawForm from "../components/WithdrawForm";


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
            path: `/deposit/:id`,
            element:<DepositForm></DepositForm>
        },
        {
            path: `/withdraw/:id`,
            element:<WithdrawForm></WithdrawForm>
        },
        {
            path: `/userDelails/:id`,
            element:<UserDetails></UserDetails>
        },
        {
            path:'/history',
            element:<TransactionHistory></TransactionHistory>
        },
       
      ]
    },
  ]);

