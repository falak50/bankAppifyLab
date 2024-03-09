
import { useParams } from "react-router-dom";
import DepoNwithdrawF from "./DepoNwithdrawF";

const WithdrawForm = () => {
    const { id } = useParams();
    const user=JSON.parse(localStorage.getItem(id));
    console.log(id);
    const type="withdraw"
    return (
        <div>
           <div className="bg-[#deabab] items-center w-[40%] m-auto px-10 py-10 ">
            <h1 className="text-xl my-2 font-semibold">Withdraw Money</h1>
            <h1>Name :  {user?.name} </h1>
            <p>Acount Number : {id} </p>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
           </div>
            <DepoNwithdrawF id={id} type={type}></DepoNwithdrawF>
        </div>
    );
};

export default WithdrawForm;