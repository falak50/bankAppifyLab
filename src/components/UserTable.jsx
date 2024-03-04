import  { useState, useEffect } from 'react';

export default function UserTable() {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('id');

  useEffect(() => {
    const dataFromLocalStorage = Object.entries(localStorage).map(([key, value]) => {
      return { uuid: key, ...JSON.parse(value) };
    });
    setUserData(dataFromLocalStorage);
  }, []); 

  const handleTransaction = (uuid) => {
    //TODO Laterrr
    console.log(`Transaction UUID: ${uuid}`);
  };

  const filteredData = userData.filter((user) => {
    if (searchBy === 'id') {
      return user.uuid.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchBy === 'name') {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const handleAddUser = () => {
   // TODO
    console.log('Add User clicked');
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <select
            className="mr-2 px-2 py-1 border border-gray-300 rounded-md"
            value={searchBy}
            onChange={handleSearchByChange}
          >
            <option value="id">ID</option>
            <option value="name">Name</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${searchBy}`}
            className="px-2 py-1 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <button
          className="btn bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-4"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">AmountBDT</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.uuid} className="border">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.uuid}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.AmountBDT}</td>
              <td className="border px-4 py-2">
                <button
                  className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleTransaction(user.uuid)}
                >
                  Transaction
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
