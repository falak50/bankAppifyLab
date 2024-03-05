import React, { useState, useEffect } from 'react';

const TransactionHistory = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const historyFromLocalStorage = localStorage.getItem('history');
    if (historyFromLocalStorage) {
      setHistoryData(JSON.parse(historyFromLocalStorage));
    }
  }, []);
//  console.log('from tranHistory - > ',historyData)
  const sendUser=historyData.sendUser;
  console.log('his sendUser--->',sendUser);
 
  return (

    <div className="overflow-x-auto">
      <h2>Transaction History</h2>
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Sender Name</th>
            <th className="border px-4 py-2">Sender ID</th>
            <th className="border px-4 py-2">Receiver Name</th>
            <th className="border px-4 py-2">Receiver ID</th>
            <th className="border px-4 py-2">Amount </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(historyData) && historyData.map((transaction, index) => {
            const { sendUser, receiveUser, date } = transaction;
            return (
              <tr key={index} className="border">
                <td className="border px-4 py-2">{date}</td>
                <td className="border px-4 py-2">{sendUser.name}</td>
                <td className="border px-4 py-2">{sendUser.uuid}</td>
                <td className="border px-4 py-2">{receiveUser.name}</td>
                <td className="border px-4 py-2">{receiveUser.uuid}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
