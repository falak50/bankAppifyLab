
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApiHook from '../Data/useApiHook';
import Converter from '../NotIn/Converter';
import UserAmountConverter from './UserAmountConverter';

const UserDetails = () => {
   const { id } = useParams();
   // const [convertedAmount, setConvertedAmount] = useState(null);
   /// work for currentcy 
   // const [currency, setCurrency] = useState('BDT');
   // const url = `https://open.er-api.com/v6/latest/${currency}`;
   // const { data, loading , error } = useApiHook(url);

   // useEffect(()=>{
   //    setConvertedAmount(user.AmountBDT)
   // },[])
   // if (loading ) {     return <div>Loading...</div>;}
   // if (error) {return <div>Error Transaction: {error.message}</div>; }
   // console.log('data',data);
   // const ratesObj = data.rates
  

//   console.log(id);
  const typedata = {
  deposit:'deposit',
  withdraw:'withdraw',
  history: 'history'
}
  const user=JSON.parse(localStorage.getItem(id));
  console.log('user info ',user);
  const userWithdraw=JSON.parse(localStorage.getItem(typedata.withdraw));
  const userDeposit=JSON.parse(localStorage.getItem(typedata.deposit));
  const userTransection=JSON.parse(localStorage.getItem(typedata.history));
  console.log('userTransection -> ',userTransection)

   // useEffect(()=>{
   //    setConvertedAmount(user.AmountBDT)
   // },[])
  return (
   <>
   <div className="bg-white border rounded-lg shadow-lg px-6 py-8 w-[60%] mx-auto mt-8">
    <h1 className="font-bold text-2xl my-4 text-center text-blue-600">Details Page</h1>
     
    <div className="mb-8 gap-1">
        <h2 className="text-lg font-bold mb-4">Personal Infromation :</h2>
        <div className="text-gray-700 mb-2">Name : {user.name}</div>
        <div className="text-gray-700 mb-2">Email : {user.email}</div>
        <div className="text-gray-700 mb-2">Phone : {user.phone}</div>
        <div className="text-gray-700 mb-2">Age : {user.age}</div>
        <div className="text-gray-700 mb-2">Acount Number : <span className='text-sm'>{id}</span>  </div>
        <UserAmountConverter  amount={user.AmountBDT}></UserAmountConverter>
        {/* <div className="text-gray-700">Amount In  BDT :{parseFloat(user.AmountBDT).toFixed(2)}  </div> */}
    </div>

    
    
    
    <div>
        <h1  className='text-lg font-bold text-gray-700 mb-2'>Withdraw  Delaits</h1>
        {userWithdraw &&
               userWithdraw.map((x,i)=>{
            console.log(x.uuid);
            const formattedDate = new Date(x.date).toLocaleString()
            const str=`${formattedDate} :  Withdraw ${x.amount} ${x.currency}`
            if(x.uuid==id)
               return <li
               key={i}
               >{str}</li>
               })
            }

    </div>
    <div>
        <h1  className='text-lg font-bold text-gray-700 mb-2'>Deposit  Delaits</h1>
        {userDeposit &&
               userDeposit.map((x,i)=>{
            console.log(x.uuid);
            const formattedDate = new Date(x.date).toLocaleString();
            const str=`${formattedDate} :   Deposit ${x.amount} ${x.currency}`
            if(x.uuid==id)
               return <li
               key={i}
               >{str}</li>
               })
            }

    </div>
    <div>
        <h1  className='text-lg font-bold text-gray-700 mb-2'>Transection  Delaits</h1>
        {userTransection &&
               userTransection.map((x,i)=>{
                console.log(x)
                console.log('sid ',x?.receiveUser.uuid)
                console.log('rid->',x?.receiveUser.uuid)
                console.log('id->',id)
             console.log(x?.sendUser.uuid);
             const formattedDate = new Date(x.date).toLocaleString();
            const str=`${formattedDate} ${x?.sendUser.name} Send ${
                x.amount} ${x.currency} to ${x.receiveUser.name}`
                
            if(id==x.receiveUser.uuid || id==x.sendUser.uuid)
               return <li
               key={i}
               >{str}</li>
               })
            }

    </div>
         
 
   
</div>

   </>
  );
};

export default UserDetails;
