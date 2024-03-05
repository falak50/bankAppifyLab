import  { } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  const user=JSON.parse(localStorage.getItem(id));
  console.log('user info ',user);
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
    </div>
    <table className="w-full mb-8">
        <thead>
            <tr>
                <th className="text-left font-bold text-gray-700">Transaction</th>
                <th className="text-right font-bold text-gray-700">Amount</th>
            </tr>
        </thead>
        <h1>Coming soon</h1>
        {/* <tbody>
            <tr>
                <td className="text-left text-gray-700">Product 1</td>
                <td className="text-right text-gray-700">$100.00</td>
            </tr>
            <tr>
                <td className="text-left text-gray-700">Product 2</td>
                <td className="text-right text-gray-700">$50.00</td>
            </tr>
            <tr>
                <td className="text-left text-gray-700">Product 3</td>
                <td className="text-right text-gray-700">$75.00</td>
            </tr>
        </tbody> */}
        {/* <tfoot>
            <tr>
                <td className="text-left font-bold text-gray-700">Total</td>
                <td className="text-right font-bold text-gray-700">$225.00</td>
            </tr>
        </tfoot> */}
    </table>
    <div className="text-gray-700 mb-2">Thank you for your Open acount </div>
   
</div>

   </>
  );
};

export default UserDetails;
