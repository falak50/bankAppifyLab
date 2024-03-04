// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'
import Test from './Test'
import useFetchData from './Data/useBasecodeFetch';
import Converter from './NotIn/Converter';
import AddUser from './components/AddUser';
import UserTable from './components/UserTable';
import TransectionForm from './components/TransectionForm';
import TransactionFormWithConverter from './NotIn/TransactionFormWithConverter';
import T from './NotIn/T';

function App() {
  // const base_code = 'BDT';
  // const url = `https://open.er-api.com/v6/latest/${base_code}`;
  // const { data, loading, error } = useFetchData(url);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if(data){
  //   console.log(Object.keys(data.rates));
  //  return  <div>get data</div>;
  // }
 
//   let needData;
// const base_code = 'BDT';
// const host = `https://open.er-api.com/v6/latest/${base_code}`;

// axios.get(host)
//   .then(response => {
//     console.log(response.data.rates);
//     console.log(Object.keys(response.data.rates));
//     needData = Object.keys(response.data.rates);
//     console.log("need data -> ", needData);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
  return (
    <>
  
      <h1 className="text-3xl font-bold underline">
      for app Bank</h1>
      {/* <Converter></Converter> */}
      {/* <Test></Test> */}
      {/* <AddUser></AddUser>
      <UserTable></UserTable>
      <TransectionForm></TransectionForm> */}
      {/* <TransactionFormWithConverter></TransactionFormWithConverter> */}
      <T></T>
    </>
  )
}

export default App
