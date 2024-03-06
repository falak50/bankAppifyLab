import { useState, useEffect } from 'react';

const TransactionHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOption, setSearchOption] = useState('sender');
  // ekbar main data load
  useEffect(() => {
    const historyFromLocalStorage = localStorage.getItem('history');
    // console.log(historyFromLocalStorage)
    if (historyFromLocalStorage) {
      setHistoryData(JSON.parse(historyFromLocalStorage));
    }
  }, []);
   /// do not use useEffect coz went searchOption change render the page auto  
   //console.log(historyData);
   const filteredData = historyData.filter(transaction => {
    // console.log('searching value -> ',searchQuery);
    
    if (searchOption === 'sender') {
      const senderID = transaction.sendUser.uuid;
      return senderID.includes(searchQuery) 
    } else {
      const receiverID = transaction.receiveUser.uuid;
      return receiverID.includes(searchQuery)
    }


  });

  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex items-center space-x-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by ID"
          className="px-4 py-2 border rounded-md"
        />
        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="sender">Search by Sender ID</option>
          <option value="receiver">Search by Receiver ID</option>
        </select>
      </div>
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Sender Name</th>
            <th className="border px-4 py-2">Sender ID</th>
            <th className="border px-4 py-2">Receiver Name</th>
            <th className="border px-4 py-2">Receiver ID</th>
            <th className="border px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((transaction, index) => {
            const { sendUser, receiveUser, date, amount, currency } = transaction;
            const formattedDate = new Date(date).toLocaleString();
            console.log(sendUser);
            console.log(receiveUser);
            
            return (
              <tr key={index} className="border">
                <td className="border px-4 py-2">{formattedDate}</td>
                <td className="border px-4 py-2">{sendUser.name}</td>
                <td className="border px-4 py-2">{sendUser.uuid}</td>
                <td className="border px-4 py-2">{receiveUser.name}</td>
                <td className="border px-4 py-2">{receiveUser.uuid}</td>
                <td className="border px-4 py-2">{amount} {currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
