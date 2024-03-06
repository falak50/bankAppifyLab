import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useApiHook from '../Data/useApiHook';
import History from './History';
import Swal from 'sweetalert2';

const TransectionForm = ({sendMoneyID}) => {
 // console.log('sendMoneyID -> ',sendMoneyID)
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
    
  ////  DATA CALL
  
  const base_code = 'BDT';
  const [currency, setCurrency] = useState('BDT');
  const url = `https://open.er-api.com/v6/latest/${currency}`;
  const { data, loading, error } = useApiHook(url);
  const [convertedAmount, setConvertedAmount] = useState(null);

  if (loading ) {     return <div>Loading...</div>;}
  if (error) {return <div>Error Transaction: {error.message}</div>; }



  const ratesObj = data.rates
  
  const handleConvertR = (formData) => {
      const { amount } = formData;
      if (amount <= 0) {
          return -1;
      } else {
          const converted = parseFloat(amount) / ratesObj[currency];
          setConvertedAmount(converted);
         return  parseFloat(amount) / ratesObj[currency];
      }
  };
 
   function isValidId(id){
     console.log(id);
     const idData = localStorage.getItem(id);
    //  console.log('id data -> ',idData)
     if(idData)return true;
     return false;
   }
   function isValidAmount(sendAmount){
    console.log('sendAmount',sendAmount);
    const sendUser=JSON.parse(localStorage.getItem(sendMoneyID));
    const haveAmount=sendUser.AmountBDT;
    console.log("have-> ",haveAmount,' sendmount -> ',sendAmount);
    if(haveAmount>=sendAmount){
      return true;
    }
    return false;
   }
   

  const onSubmit = (data) => {

      console.log('submit click')
      // handleConvert(data);
      if(sendMoneyID==data.accountNumber){
         alert('You cannot transfer money to yourself');
         return
      }

      const sendAmount = handleConvertR(data);
     // console.log('sendAmount -> ',sendAmount);
      if(sendAmount<=0)
      {
        alert("Amount should be greater than 0");
        return;
      }
  
      if(!isValidId(data.accountNumber)){
        alert('Invaild Account Number')
       // console.log('id is not valid ')
        return;
      }
     // console.log('id is valid ')
      if(!isValidAmount(sendAmount)){
        // console.log('Not enough money to send')
        alert('Not enough money to send')
        return;
      }
      console.log('amount  is  valid ')
      // check done 
      const sendUser=JSON.parse(localStorage.getItem(sendMoneyID));
      console.log("main function ",sendUser);
      const curSendUser = sendUser;
      curSendUser.AmountBDT=curSendUser.AmountBDT-sendAmount;
      console.log('current user ',curSendUser);
      localStorage.setItem(sendMoneyID,JSON.stringify(curSendUser));
      const receiveUser=JSON.parse(localStorage.getItem(data.accountNumber));
      const curReceiveUser = receiveUser;
      curReceiveUser.AmountBDT=curReceiveUser.AmountBDT+sendAmount;
      console.log('current user ',curReceiveUser);
      localStorage.setItem(data.accountNumber,JSON.stringify(curReceiveUser));
      
    const currentDate = new Date(); 
    sendUser.uuid=sendMoneyID;
    receiveUser.uuid=data.accountNumber;
    const type='transfer';
    const history = {
        sendUser: sendUser,
        receiveUser: receiveUser,
        date: currentDate,
        currency: data.currency, 
        amount: data.amount,
        type:type
    };
    console.log(history)
    let historyCollected=JSON.parse(localStorage.getItem('history'))
    if(!historyCollected){
      historyCollected=[]
    }
    historyCollected.push(history);
    console.log('age  history ',historyCollected);
 
    const historyString = JSON.stringify(historyCollected);
    localStorage.setItem('history', historyString);
      // console.log('money transfer done and storelocal host')

      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Money Transfered successfully",
        showConfirmButton: false,
        timer: 1500
      });
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="w-[40%] mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex items-center gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountNumber">
                Account Number:
            </label>
            <input
                className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.accountNumber ? 'border-red-500' : ''}`}
                id="accountNumber"
                type="text"
                placeholder="Account Number"
                {...register("accountNumber", { required: true })}
            />
            {errors.accountNumber && <p className="text-red-500 text-xs italic">This field is required</p>}
        </div>
        <div className="mb-4 flex items-center gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
                Select currency:
            </label>
            <select
                className="flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="currency"
                {...register("currency", { required: true })}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                {Object.keys(ratesObj).map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            {errors.currency && <p className="text-red-500 text-xs italic">Please select a currency</p>}
        </div>
        <div className="mb-4 flex items-center gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                Amount in {currency}:
            </label>
            <input
    className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.amount ? 'border-red-500' : ''}`}
    id="amount"
    type="number"
    step="any" // Allow any decimal number
    inputMode="decimal" // Prevent incremental increase/decrease
    placeholder="Amount"
    {...register("amount", { required: true, min: 0 })}
/>
        </div>
       
        <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
            </button>
        </div>
    </form>
    {/* {convertedAmount && (
        <div>
            <p>
                Converted amount: {convertedAmount.toFixed(2)} {base_code}
            </p>
        </div>
    )} */}
</div>
  );
};

export default TransectionForm;
