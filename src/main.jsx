import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#f4f2ee] h-[1000px] text-gray-700 '>
    <RouterProvider router={router} />
    {/* <App></App> */}
    </div>
      
  </React.StrictMode>,
)
