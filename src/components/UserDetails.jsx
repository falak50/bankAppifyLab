
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
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
  //console.log("ALL deposite  :",userDeposit);
  //  const  user = {
  //   AmountBDT:870.367493277562,
  //   age : "123",
  //   email: "falakahmedshakib170@gmail.com",
  //   name: "Falak Ahmed",
  //   phone:"10123456781"
  // }
  return (
   <>
   <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
    <h1 className="font-bold text-2xl my-4 text-center text-blue-600">Details Page</h1>

    <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Personal Infromation :</h2>
        <div className="text-gray-700 mb-2">Name : {user.name}</div>
        <div className="text-gray-700 mb-2">Email : {user.email}</div>
        <div className="text-gray-700 mb-2">Phone : {user.phone}</div>
        <div className="text-gray-700 mb-2">Age : {user.age}</div>
        <div className="text-gray-700">Acount Number : 213ydhgy238134679 </div>
        <div className="text-gray-700">Amount In BDT :{parseFloat(user.AmountBDT).toFixed(2)}  </div>
    </div>
    
    
    <div>
        <h1  className='text-lg font-bold text-gray-700 mb-2'>Withdraw  Delaits</h1>
        {userWithdraw &&
               userWithdraw.map((x,i)=>{
            console.log(x.uuid);
            const str=`${x.date} :  ${x.type} ${x.amount} ${x.currency}`
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
            const str=`${x.date} :   ${x.type} ${x.amount} ${x.currency}`
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
            const str=`${x?.sendUser.name} Send ${
                x.amount} ${x.currency} to ${x.receiveUser.name}`
                
            if(id==x.receiveUser.uuid || id==x.sendUser.uuid)
               return <li
               key={i}
               >{str}</li>
               })
            }

    </div>
         
    <div className="text-gray-700 mb-2">Thank you for your Open acount </div>
   
</div>

   </>
  );
};

export default UserDetails;
