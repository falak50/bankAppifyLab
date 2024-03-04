import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useApiHook from '../Data/useApiHook';

const TransectionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    
  ////  DATA CALL
  
  const base_code = 'BDT';
  const [currency, setCurrency] = useState('BDT');
  const url = `https://open.er-api.com/v6/latest/${currency}`;
  const { data, loading, error } = useApiHook(url);
  const [convertedAmount, setConvertedAmount] = useState(null);

  if (loading ) {     return <div>Loading...</div>;}
  if (error) {return <div>Error: {error.message}</div>; }


  // console.log(data.rates)
  console.log('base data ',data)
  const ratesObj = data.rates
  const handleConvert = (formData) => {
      const { amount } = formData;
      if (amount <= 0) {
          alert("Amount should be greater than 0");
          return;
      } else {
          const converted = parseFloat(amount) / ratesObj[currency];
          setConvertedAmount(converted);
      }
  };

  const onSubmit = (data) => {
      console.log('submit click')
      handleConvert(data);
      // Additional logic to handle form submission
      console.log("Submitted data:", {
          ...data,
          currency
      });
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                Amount in {currency}:
            </label>
            <input
                className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.amount ? 'border-red-500' : ''}`}
                id="amount"
                type="number"
                placeholder="Amount"
                {...register("amount", { required: true, min: 0 })}
            />
            {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount.type === "required" ? "This field is required" : "Amount must be a positive number"}</p>}
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
        <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
            </button>
        </div>
    </form>
    {convertedAmount && (
        <div>
            <p>
                Converted amount: {convertedAmount.toFixed(2)} {base_code}
            </p>
        </div>
    )}
</div>
  );
};

export default TransectionForm;
