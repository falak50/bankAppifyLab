import { useParams } from "react-router-dom";
import T from "../NotIn/T";
import TransectionForm from "../components/TransectionForm";


const Transaction = () => {

    //data fetch start
    

    //  data fetch end 
    const { id } = useParams();
    console.log(id);
    const user=JSON.parse(localStorage.getItem(id));
    console.log('user info ',user);


    return (
        <div>
           <div className="bg-[gray] items-center w-[30%] m-auto px-10 py-10 ">
            <h1>User Info </h1>
            <h1>Name :  {user?.name} </h1>
            <h1>Total : {user?.AmountBDT} USD </h1>
            <p>Acount id : {id} </p>
           </div>
           
           {/* <Transaction></Transaction> */}
            <TransectionForm></TransectionForm>

            
        </div>
    );
};

export default Transaction;