import { useState } from "react";
import { useForm } from "react-hook-form";
import useApiHook from "../Data/useApiHook";
import Swal from "sweetalert2";


const DepoNwithdrawF = ({id,type}) => {
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
  const typedata = {
    deposit:'deposit',
    withdraw:'withdraw'
  }
  const onSubmit = (data) => {
   // console.log(data);
    const {accountNumber,currency,amount} = data;
    const user=JSON.parse(localStorage.getItem(id));
    if(!user){
        alert("This wrong path or user Try from beging");
        return
    }
   // console.log("main function ",user);
    const AmountBDT = handleConvertR(data);
    console.log('Amount in BDT ',AmountBDT);
    if(AmountBDT<=0){
        alert(`you cannot ${type} less than or equal 0`)
        return ;
    }
    
    if(type == typedata.deposit){
        console.log('hit from deposite');
        user.AmountBDT = user.AmountBDT + AmountBDT;
        console.log('Update user ',user);
        localStorage.setItem(id,JSON.stringify(user));
    }else {
        console.log('hit from ',typedata.withdraw);
        user.AmountBDT = user.AmountBDT - AmountBDT;
        if(user.AmountBDT<0){
            alert('You do not have enough Money to withdwraw this Amount ');
            return;
        }
        console.log('Update user ',user);
        localStorage.setItem(id,JSON.stringify(user));
       
    }

    // ---- history 
    const currentDate = new Date(); 
    const historyDepoNwith = {
           uuid:id,
           date: currentDate,
           type:type,
           currency: data.currency, 
           amount: data.amount,
    };
    console.log(historyDepoNwith)
    let historyCollected=JSON.parse(localStorage.getItem(type))
    if(!historyCollected){
      historyCollected=[]
    }
    historyCollected.push(historyDepoNwith);
    console.log('ager  historyDepoNwith ',historyCollected);
 
    const historyString = JSON.stringify(historyCollected);
    localStorage.setItem(type, historyString);

   reset();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Money ${type} successfully`,
        showConfirmButton: false,
        timer: 1500
      });

  }
    return (
        
        
            <form onSubmit={handleSubmit(onSubmit) } className=" mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[40%] ">
        
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
  
    );
};

export default DepoNwithdrawF;