import { useParams } from "react-router-dom";
import TransectionForm from "../components/TransectionForm";



const Transaction = () => {
     
    //data fetch start
    

    //  data fetch end 
    const { id } = useParams();
    console.log(id);
    // const user=JSON.parse(localStorage.getItem(id));
    // console.log('user info ',user); 
    // this is not working 


    return (
        <div className="m-10">
           <div className="bg-[#deabab] items-center w-[40%] m-auto px-10 py-10 ">
            <h1 className="text-xl">Transfer Money</h1>
            {/* <p>From Name :  {user?.name} </p> */}
            {/* <h1>Name :  {user?.name} </h1>
            {/* <h1>Total : {user?.AmountBDT} USD </h1> */} 
            {/* <p>Acount id : {id} </p> */}
           </div>
           
           {/* <Transaction></Transaction> */}

            <TransectionForm 
            sendMoneyID={id}
            ></TransectionForm>

            
        </div>
    );
};

export default Transaction;