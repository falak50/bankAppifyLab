import  { useState } from 'react';
import useFetchData from '../Data/useBasecodeFetch';

const UserAmountConverter= ({amount}) => {
  ////  DATA CALL
  const base_code = 'BDT';
  const url = `https://open.er-api.com/v6/latest/${base_code}`;
  const { data, loading, error } = useFetchData(url);

  const [currency, setCurrency] = useState('BDT'); // Default currency selection
  const [convertedAmount, setConvertedAmount] = useState(amount);
//   const [amount, setAmount] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data.rates)

  const ratesObj = data.rates

  const handleConvert = () => {
      const converted = parseFloat(amount) * ratesObj[currency];
      setConvertedAmount(converted);
  };

  

  return (
    <div>
        <p>
          Amount: {convertedAmount.toFixed(2)} { <select
          id="currencySelect"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          onClick={handleConvert}
        >
          {Object.keys(ratesObj).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>}
        </p>
      
    </div>
  );
};

export default UserAmountConverter;
