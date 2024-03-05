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
            <h1> wowo WithdrawForm </h1>
            <DepoNwithdrawF id={id} type={type}></DepoNwithdrawF>
        </div>
    );
};

export default WithdrawForm;