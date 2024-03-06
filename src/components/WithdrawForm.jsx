import { useForm } from "react-hook-form";
import useApiHook from "../Data/useApiHook";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DepoNwithdrawF from "./DepoNwithdrawF";

const WithdrawForm = () => {
    const { id } = useParams();
    console.log(id);
    const type="withdraw"
    return (
        <div>
            <div className="bg-[#deabab] items-center w-[40%] m-auto px-10 py-10 ">
            <h1 className="text-xl">Withdraw Money</h1>
            <p>Amount Number : <small>{id}</small></p>
           </div>
            <DepoNwithdrawF id={id} type={type}></DepoNwithdrawF>
        </div>
    );
};

export default WithdrawForm;