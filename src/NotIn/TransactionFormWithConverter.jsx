import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFetchData from '../Data/useBasecodeFetch';

const TransactionFormWithConverter = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    ////  DATA CALL
    const base_code = 'BDT';
    const url = `https://open.er-api.com/v6/latest/${base_code}`;
    const { data, loading, error } = useFetchData(url);

    const [currency, setCurrency] = useState('AED'); // Default currency selection
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [amount, setAmount] = useState(null);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log(data.rates)

    const ratesObj = data.rates

    const handleConvert = () => {
        if (amount <= 0) {
            alert("Amount should be greater than 0");
        } else if (!amount) {
            alert("Enter some amount");
        } else {
            const converted = parseFloat(amount) * ratesObj[currency];
            setConvertedAmount(converted);
        }
    };

    // Handler function to update the amount state when input changes
    const handleAmountChange = (event) => {
        // Update the amount state with the new value
        setAmount(event.target.value);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2>Currency Converter</h2>
            <div>
                <label htmlFor="amountInput">Enter amount in BDT:</label>
                <input
                    type="number"
                    id="amountInput"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder='Enter Numbers'
                />
            </div>
            <div>
                <label htmlFor="currencySelect">Select currency:</label>
                <select
                    id="currencySelect"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    {Object.keys(ratesObj).map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
            {convertedAmount && (
                <p>
                    Converted amount: {convertedAmount.toFixed(2)} {currency}
                </p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 flex items-center gap-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountNumber">
                        Account Number:
                    </label>
                    <input
                        className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 bg-[white] leading-tight focus:outline-none focus:shadow-outline ${errors.accountNumber ? 'border-red-500' : ''}`}
                        id="accountNumber"
                        type="text"
                        placeholder="Account Number"
                        {...register("accountNumber", { required: true })}
                    />
                    {errors.accountNumber && <p className="text-red-500 text-xs italic">This field is required</p>}
                </div>
                <div className="mb-4 flex items-center gap-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Amount:
                    </label>
                    <input
                        className={`flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 bg-[white] leading-tight focus:outline-none focus:shadow-outline ${errors.amount ? 'border-red-500' : ''}`}
                        id="amount"
                        type="number"
                        placeholder="Amount"
                        {...register("amount", { required: true, min: 0 })}
                    />
                    {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount.type === "required" ? "This field is required" : "Amount must be a positive number"}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TransactionFormWithConverter;
