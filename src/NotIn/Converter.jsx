import  { useState } from 'react';
import useFetchData from '../Data/useBasecodeFetch';

const Converter = () => {
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
    if(amount <= 0){
      alert("Amount should be greater than 0");
    } else if(!amount) {
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
    </div>
  );
};

export default Converter;
